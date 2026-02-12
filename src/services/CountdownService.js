// Service untuk manage countdown data dengan localStorage
class CountdownService {
  constructor() {
    this.storageKey = 'birthdayCountdowns';
  }

  // Get semua countdowns
  getAllCountdowns() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // Add countdown baru
  addCountdown(name, day, month) {
    const countdowns = this.getAllCountdowns();
    const newCountdown = {
      id: Date.now(),
      name,
      day,
      month,
      createdAt: new Date().toISOString(),
      theme: 'default',
      notifications: true
    };
    countdowns.push(newCountdown);
    localStorage.setItem(this.storageKey, JSON.stringify(countdowns));
    return newCountdown;
  }

  // Delete countdown
  deleteCountdown(id) {
    let countdowns = this.getAllCountdowns();
    countdowns = countdowns.filter(c => c.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(countdowns));
  }

  // Update countdown
  updateCountdown(id, updates) {
    let countdowns = this.getAllCountdowns();
    countdowns = countdowns.map(c => c.id === id ? { ...c, ...updates } : c);
    localStorage.setItem(this.storageKey, JSON.stringify(countdowns));
  }

  // Get countdown by ID
  getCountdown(id) {
    return this.getAllCountdowns().find(c => c.id === id);
  }

  // Get countdowns sorted by nearest date
  getUpcomingCountdowns(limit = 5) {
    const countdowns = this.getAllCountdowns();
    const now = new Date();
    
    return countdowns
      .map(c => ({
        ...c,
        daysLeft: this.calculateDaysLeft(c.day, c.month, now)
      }))
      .filter(c => c.daysLeft >= 0)
      .sort((a, b) => a.daysLeft - b.daysLeft)
      .slice(0, limit);
  }

  // Calculate days left untuk countdown
  calculateDaysLeft(day, month, now = new Date()) {
    let target = new Date(now.getFullYear(), parseInt(month) - 1, parseInt(day));
    if (now > target) target.setFullYear(now.getFullYear() + 1);
    const diff = target - now;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  // Clear semua countdowns
  clearAll() {
    localStorage.removeItem(this.storageKey);
  }
}

export default new CountdownService();
