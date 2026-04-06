export const properties = [
  { 
    id: 1, 
    title: 'Skyline Penthouse', 
    location: 'Downtown Business District', 
    price: '$2.5M', 
    bhk: '4 BHK', 
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800', 
    verified: true,
    sqft: '4,500',
    year: '2023',
    amenities: ['Private Pool', 'Gym', 'Concierge', 'Smart Home System'],
    type: 'apartment',
    status: 'Available'
  },
  { 
    id: 2, 
    title: 'Emerald Villas', 
    location: 'Suburban Hills', 
    price: '$850k', 
    bhk: '3 BHK', 
    img: 'https://images.unsplash.com/photo-1600607687931-ce8e004a8c8a?auto=format&fit=crop&q=80&w=800', 
    verified: true,
    sqft: '2,800',
    year: '2021',
    amenities: ['Garden', 'Parking', 'Security', 'Play Area'],
    type: 'villa',
    status: 'Selling Fast'
  },
  { 
    id: 3, 
    title: 'Marina Residences', 
    location: 'Waterfront Bay', 
    price: '$1.2M', 
    bhk: '2 BHK', 
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', 
    verified: true,
    sqft: '1,500',
    year: '2022',
    amenities: ['Sea View', 'Balcony', 'Clubhouse', 'Yoga Room'],
    type: 'apartment',
    status: 'Available'
  },
  { 
    id: 4, 
    title: 'Beverly Hills Estate', 
    location: 'Beverly Hills, CA', 
    price: '$12.5M', 
    bhk: '6 BHK', 
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800', 
    verified: true,
    sqft: '8,200',
    year: '2020',
    amenities: ['Pool', 'Tennis Court', 'Wine Cellar'],
    type: 'villa',
    status: 'Exclusive'
  }
];

export const marketingData = [
  { name: 'SEO (Organic)', engagement: 4500, conversion: 1.2, cost: 0, roi: 450 },
  { name: 'Google Ads', engagement: 8200, conversion: 3.5, cost: 1200, roi: 280 },
  { name: 'Meta Ads', engagement: 12000, conversion: 2.8, cost: 1500, roi: 210 },
  { name: 'Referrals', engagement: 1500, conversion: 8.5, cost: 300, roi: 620 },
  { name: 'Influencers', engagement: 25000, conversion: 0.8, cost: 2000, roi: 115 },
];

export const revenueStreams = [
  { name: 'Sales Commissions', value: 125000, color: '#0ea5e9', type: 'Sales' },
  { name: 'Builder Subs', value: 45000, color: '#6366f1', type: 'Subscription' },
  { name: 'Featured Ads', value: 32000, color: '#f59e0b', type: 'Advertising' },
  { name: 'Escrow Fees', value: 18000, color: '#10b981', type: 'Transaction' },
  { name: 'Market Reports', value: 12000, color: '#ec4899', type: 'Affiliate' },
];

export const crmFeedback = [
  { id: 1, user: 'Rahul S.', type: 'Complaint', category: 'Payment', msg: 'Payment gateway timed out during booking.', status: 'High' },
  { id: 2, user: 'Anita M.', type: 'Feedback', category: 'UI', msg: 'Love the new virtual tour feature!', status: 'Low' },
  { id: 3, user: 'John D.', type: 'Complaint', category: 'Payment', msg: 'Multiple deductions for single transaction.', status: 'Critical' },
  { id: 4, user: 'Sania P.', type: 'Feedback', category: 'Agent', msg: 'Agent was very helpful with documents.', status: 'Low' },
];

export const complaintAnalysis = [
  { name: 'Payment Issues', total: 720, action: 'Auto-Flagged for Dev Team', status: 'In Progress' },
  { name: 'App Crashes', total: 150, action: 'Scheduled Fix in v2.4', status: 'Resolved' },
  { name: 'Agent Response', total: 80, action: 'Training Session Scheduled', status: 'Pending' },
  { name: 'Data Privacy', total: 5, action: 'Legal Review Completed', status: 'Resolved' },
];

export const agentLeads = [
  { id: 1, name: 'David Wilson', property: 'Skyline Penthouse', date: '2h ago', status: 'Inquiry', type: 'Viewing Request' },
  { id: 2, name: 'Sarah Jenkins', property: 'Emerald Villas', date: '5h ago', status: 'Follow-up', type: 'Negotiation' },
  { id: 3, name: 'Michael Chen', property: 'Marina Residences', date: '1d ago', status: 'Hot', type: 'Offer Received' },
  { id: 4, name: 'Emma Watson', property: 'Skyline Penthouse', date: '2d ago', status: 'Contacted', type: 'General' },
];

export const agentPerformance = [
  { month: 'Jan', viewings: 45, sales: 2, leads: 120 },
  { month: 'Feb', viewings: 52, sales: 3, leads: 145 },
  { month: 'Mar', viewings: 61, sales: 5, leads: 160 },
  { month: 'Apr', viewings: 78, sales: 4, leads: 210 },
];
