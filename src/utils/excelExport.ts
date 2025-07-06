import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export interface InquiryData {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  timestamp: string;
  status: 'New' | 'In Progress' | 'Resolved';
}

// Get inquiries from localStorage
export const getInquiries = (): InquiryData[] => {
  const stored = localStorage.getItem('twinc_inquiries');
  return stored ? JSON.parse(stored) : [];
};

// Save inquiry to localStorage
export const saveInquiry = (inquiry: Omit<InquiryData, 'id' | 'timestamp' | 'status'>): InquiryData => {
  const inquiries = getInquiries();
  const newInquiry: InquiryData = {
    ...inquiry,
    id: `INQ-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    timestamp: new Date().toISOString(),
    status: 'New'
  };
  
  inquiries.unshift(newInquiry); // Add to beginning of array
  localStorage.setItem('twinc_inquiries', JSON.stringify(inquiries));
  
  return newInquiry;
};

// Update inquiry status
export const updateInquiryStatus = (id: string, status: InquiryData['status']) => {
  const inquiries = getInquiries();
  const index = inquiries.findIndex(inquiry => inquiry.id === id);
  
  if (index !== -1) {
    inquiries[index].status = status;
    localStorage.setItem('twinc_inquiries', JSON.stringify(inquiries));
  }
};

// Export inquiries to Excel
export const exportInquiriesToExcel = (inquiries: InquiryData[] = getInquiries()) => {
  if (inquiries.length === 0) {
    alert('No inquiries to export!');
    return;
  }

  // Prepare data for Excel
  const excelData = inquiries.map((inquiry, index) => ({
    'S.No': index + 1,
    'Inquiry ID': inquiry.id,
    'Full Name': inquiry.name,
    'Email Address': inquiry.email,
    'Phone Number': inquiry.phone || 'Not Provided',
    'Subject': inquiry.subject,
    'Message': inquiry.message,
    'Date & Time': new Date(inquiry.timestamp).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }),
    'Status': inquiry.status,
    'Days Since Inquiry': Math.floor((Date.now() - new Date(inquiry.timestamp).getTime()) / (1000 * 60 * 60 * 24))
  }));

  // Create workbook and worksheet
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(excelData);

  // Set column widths
  const colWidths = [
    { wch: 8 },   // S.No
    { wch: 20 },  // Inquiry ID
    { wch: 25 },  // Full Name
    { wch: 30 },  // Email Address
    { wch: 15 },  // Phone Number
    { wch: 20 },  // Subject
    { wch: 50 },  // Message
    { wch: 20 },  // Date & Time
    { wch: 12 },  // Status
    { wch: 15 }   // Days Since Inquiry
  ];
  ws['!cols'] = colWidths;

  // Add worksheet to workbook
  XLSX.utils.book_append_sheet(wb, ws, 'Inquiries');

  // Generate Excel file
  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
  // Generate filename with current date
  const currentDate = new Date().toISOString().split('T')[0];
  const filename = `TWINC_Inquiries_${currentDate}.xlsx`;
  
  // Download file
  saveAs(data, filename);
};

// Export filtered inquiries
export const exportFilteredInquiries = (filters: {
  status?: InquiryData['status'];
  dateFrom?: string;
  dateTo?: string;
  subject?: string;
}) => {
  let inquiries = getInquiries();

  // Apply filters
  if (filters.status) {
    inquiries = inquiries.filter(inquiry => inquiry.status === filters.status);
  }

  if (filters.dateFrom) {
    const fromDate = new Date(filters.dateFrom);
    inquiries = inquiries.filter(inquiry => new Date(inquiry.timestamp) >= fromDate);
  }

  if (filters.dateTo) {
    const toDate = new Date(filters.dateTo);
    toDate.setHours(23, 59, 59, 999); // End of day
    inquiries = inquiries.filter(inquiry => new Date(inquiry.timestamp) <= toDate);
  }

  if (filters.subject) {
    inquiries = inquiries.filter(inquiry => 
      inquiry.subject.toLowerCase().includes(filters.subject!.toLowerCase())
    );
  }

  exportInquiriesToExcel(inquiries);
};

// Get inquiry statistics
export const getInquiryStats = () => {
  const inquiries = getInquiries();
  
  return {
    total: inquiries.length,
    new: inquiries.filter(i => i.status === 'New').length,
    inProgress: inquiries.filter(i => i.status === 'In Progress').length,
    resolved: inquiries.filter(i => i.status === 'Resolved').length,
    thisWeek: inquiries.filter(i => {
      const inquiryDate = new Date(i.timestamp);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return inquiryDate >= weekAgo;
    }).length,
    thisMonth: inquiries.filter(i => {
      const inquiryDate = new Date(i.timestamp);
      const monthAgo = new Date();
      monthAgo.setMonth(monthAgo.getMonth() - 1);
      return inquiryDate >= monthAgo;
    }).length
  };
};