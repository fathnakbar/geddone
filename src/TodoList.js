export default class TodoList {
    list = {}
    listener = []
    id = 0

    add(str){

        
        this.list[this.id] = {text: str, state: false};
        this.run({type: "add", id: this.id, str})
        this.id += 1;
    }

    remove(id){
        delete this.list[id];
        this.run({type: "delete", id})
    }

    setState(id, state){
        let prev = this.list[id].state
        this.list[id].state = state;
        this.run({type: "change", id, prev, str: this.list[id].text})
    }

    run(action){
        let list = this.list
        this.listener.forEach(fn => {
            fn(list, action)
        });
    }

    addListener(fn){
        this.listener.push(fn)
    }
}