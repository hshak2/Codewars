class Archiver {
  constructor() {
     this.archive = []
  }
  set temperature(temp) {
    this.temp = temp;
    this.archive.push({date: new Date(), val: temp});
  }
  get temperature() { return this.temp; }
  getArchive() {
    return this.archive;
  }
}