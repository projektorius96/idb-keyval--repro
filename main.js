import { get, set } from "idb-keyval"; // DEV_NOTE # this goes to IndexedDB, not localstorage!

/* REMARKS 
  * we use unload = 'beforeunload' because of unload event deprecation, see links below as follows:
  * link:https://developer.chrome.com/blog/deprecating-unload/ (newest article)
  * link: https://developer.chrome.com/articles/page-lifecycle-api/#the-unload-event (relevant article)
*/
const [load, unload] = ['load', 'beforeunload'];

  addEventListener(unload, async ()=>{
    return await set("layer-manager", [2,0,1])
  })
  addEventListener(load, async ()=>{
    /* return */console.log(
      await get("layer-manager")
    )
  })