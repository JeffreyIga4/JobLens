// src/lib/constants.js
export const STATUSES = [
  {
    value: 'applied',
    label: 'Applied',
    color: 'bg-blue-500/10 text-blue-700 border-blue-500/20',
    dot: 'bg-blue-500',
  },
  {
    value: 'interview',
    label: 'Interview',
    color: 'bg-violet-500/10 text-violet-700 border-violet-500/20',
    dot: 'bg-violet-500',
  },
  {
    value: 'offer',
    label: 'Offer',
    color: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
    dot: 'bg-emerald-500',
  },
  {
    value: 'rejected',
    label: 'Rejected',
    color: 'bg-rose-500/10 text-rose-700 border-rose-500/20',
    dot: 'bg-rose-500',
  },
]

export const getStatus = (value) =>
  STATUSES.find((s) => s.value === value) || STATUSES[0]