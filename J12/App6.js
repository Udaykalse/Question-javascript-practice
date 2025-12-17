function excute(cb){
    cb?.();
}

excute(()=>console.log("Callback Excuted"))