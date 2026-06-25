export const PRIORITY = {
    Placement: 3,
    Result: 2,
    Event: 1
};

export const getScore = (notification) => {
    return PRIORITY[notification.Type] || 0;
};

class MinHeap {

    constructor(compare){
        this.heap=[];
        this.compare=compare;
    }

    parent(i){
        return Math.floor((i-1)/2);
    }

    left(i){
        return 2*i+1;
    }

    right(i){
        return 2*i+2;
    }

    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]];
    }

    push(item){

        this.heap.push(item);

        let i=this.heap.length-1;

        while(i>0){

            let p=this.parent(i);

            if(this.compare(this.heap[i],this.heap[p])>=0)
                break;

            this.swap(i,p);

            i=p;
        }

    }

    pop(){

        if(this.heap.length===1)
            return this.heap.pop();

        const root=this.heap[0];

        this.heap[0]=this.heap.pop();

        this.heapify(0);

        return root;

    }

    heapify(i){

        let smallest=i;

        let l=this.left(i);

        let r=this.right(i);

        if(l<this.heap.length &&
            this.compare(this.heap[l],this.heap[smallest])<0)
            smallest=l;

        if(r<this.heap.length &&
            this.compare(this.heap[r],this.heap[smallest])<0)
            smallest=r;

        if(smallest!==i){

            this.swap(i,smallest);

            this.heapify(smallest);

        }

    }

    peek(){
        return this.heap[0];
    }

    size(){
        return this.heap.length;
    }

}