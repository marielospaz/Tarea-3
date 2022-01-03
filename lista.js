class Nodo {
    constructor(data) {
        this.data = data
        this.next = null
        this.previo = null
        this.list2 = new List2()
    }
}

class List {
    constructor() {
        this.inicio = null
    }

    add(data) {
        let nuevo = new Nodo(data)
        if (this.inicio == null) {
            this.inicio = nuevo
        } else {
            let temporal = this.inicio
            while (temporal.next != null) {
                temporal = temporal.next
            }
            temporal.next = nuevo
            nuevo.previo = temporal
        }
    }

    show() {
        let temporal = this.inicio
        while (temporal != null) {
            console.log( + temporal.data)
            temporal.list2.show()
            temporal = temporal.next
        }
    }

    addList2(nombre, data) {
        let temporal = this.inicio
        while (temporal != null) {
            if (nombre == temporal.data) {
                temporal.list2.add(data)
                return
            } else {
                temporal = temporal.next
            }
        }
        return null
    }
}

class List2 {
    constructor() {
        this.inicio = null
    }

    add(data) {
        let nuevo = new Nodo(data)
        if (this.inicio == null) {
            this.inicio = nuevo
        } else {
            let temporal = this.primero
            while (temporal.next != null) {
                temporal = temporal.next
            }
            temporal.next = nuevo
            nuevo.previo = temporal
        }
    }

    show() {
        let temporal = this.inicio
        while (temporal != null) {
            console.log( + temporal.data)
            temporal = temporal.next
        }
    }
}

let lista = new List()

lista.add("Marielos")
lista.add("Dennis")
lista.add("Javier")
lista.add("Andrea")
lista.addList2(1)
lista.addList2(20)
lista.addList2(5)
lista.addList2(3)
lista.show()