import { create } from "zustand";

const useInquiryStore = create((set, get) => ({
  inquiries: [],
  loading: false,
  error: null,
  selectedInquiry: null,

  setInquiries: (inquiries) => set({ inquiries }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  selectInquiry: (inquiry) => set({ selectedInquiry: inquiry }),

  updateStatus: (id, status) =>
    set((state) => ({
      inquiries: state.inquiries.map((inq) =>
        inq.id === id ? { ...inq, status } : inq
      ),
    })),

  addInquiry: (inquiry) =>
    set((state) => ({
      inquiries: [inquiry, ...state.inquiries],
    })),
}));

export default useInquiryStore;
