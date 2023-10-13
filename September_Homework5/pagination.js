const Pagination = {
    init(data, pageSize) {
        this.data = data;
        this.pageSize = pageSize;
        this.currentPage = 1;
        this.lastPageNumber = Math.round(this.data.length / this.pageSize);
    },

    prevPage() {
        if (this.currentPage === 1)
            this.currentPage = this.data.length > this.pageSize ? this.lastPageNumber: 1;
        else
            this.currentPage -= 1;

        return this;
    },

    nextPage() {
        if (this.currentPage * this.pageSize < this.data.length)
            this.currentPage += 1;
        else
            this.currentPage = 1;

        return this;
    },

    firstPage() {
        this.currentPage = 1;
    },

    lastPage() {
        this.currentPage = this.lastPageNumber;
    },

    goToPage(pageNumber) {
        if (this.lastPageNumber >= pageNumber)
            this.currentPage = pageNumber;
    },

    getPageItems() {
        const size = this.pageSize;
        const start = (this.currentPage - 1) * size;
        return this.data.slice(start, start + size);
    }
}



