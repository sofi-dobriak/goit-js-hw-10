import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as n}from"./assets/vendor-Cag9cCPy.js";const i={form:document.querySelector(".form")};i.form.addEventListener("submit",e=>{var r;e.preventDefault();const t=i.form.querySelector('input[name="delay"]').value,s=(r=i.form.querySelector('input[name="state"]:checked'))==null?void 0:r.value;m(s,t).then(o=>c(o)).catch(o=>u(o)),i.form.reset()});function m(e,t){return new Promise((r,o)=>{setTimeout(()=>{e==="fulfilled"?r(t):o(t)},+t)})}function c(e){n.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}function u(e){n.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topRight"})}
//# sourceMappingURL=2-snackbar.js.map
