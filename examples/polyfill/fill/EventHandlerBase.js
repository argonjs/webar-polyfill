export default class EventHandlerBase {
	constructor(){
		this._listeners = new Map() // string type -> [listener, ...]
	}

	addEventListener(type, listener){
		let listeners = this._listeners.get(type)
		if(Array.isArray(listeners) === false){
			listeners = []
			this._listeners.set(type, listeners)
		}
		listeners.push(listener)
	}

	removeEventListener(type, listener){
		let listeners = this._listeners.get(type)
		if(Array.isArray(listeners) === false){
			return
		}
		for(let i; i < listeners.length; i++){
			if(listeners[i] === currentListener){
				listeners.splice(i, 1)
				return
			}
		}
	}

	dispatchEvent(event){
		let listeners = this._listeners.get(type)
		if(Array.isArray(listeners) === false) return
		for(let listener of listeners){
			listener(event)
		}
	}
}