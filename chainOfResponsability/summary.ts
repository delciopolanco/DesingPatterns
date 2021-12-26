export class Summary {
  price: number;
  status: string;
  description: string;
  date: Date;
  notes: string;
}

export class SummaryBuilder {
  private summary: Summary;

  constructor() {
    this.summary = new Summary();
  }

  addPrice(price: number) {
    this.summary.price = price;
    return this;
  }

  addStatus(status: 'completed' | 'in Progress') {
    this.summary.status = status;
    return this;
  }

  addDescription(description: string) {
    this.summary.description = description;
    return this;
  }

  addDate(date: Date) {
    this.summary.date = date;
    return this;
  }

  addNotes(notes: string) {
    this.summary.notes = notes;
    return this;
  }

  build() {
    return this.summary;
  }
}

const summary = new SummaryBuilder()
  .addDate(new Date())
  .addDescription('my description')
  .addNotes('my Notes')
  .addPrice(20000)
  .addStatus('completed')
  .build();
