import param from '@/param/param'

export default{
    getLocal(){
        return JSON.parse(localStorage.getItem(param.titre));
    },
    setLocal(value){
        localStorage.setItem(param.titre, JSON.stringify(value));
    },
    removeLocal(){
        localStorage.removeItem(param.titre);
    },
}

