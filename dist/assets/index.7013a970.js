import{j as d,r as l,a as u,R as m,b as p}from"./vendor.6924a286.js";const h=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};h();const r=d.exports.jsx,a=d.exports.jsxs;function f({coin:s,index:n}){return a("tr",{children:[r("td",{className:"text-muted",children:n}),a("td",{children:[r("img",{src:s.image,alt:"",className:"img-fluid me-4",style:{width:"3%"}}),r("span",{children:s.name}),r("span",{className:"ms-3 text-muted",children:s.symbol})]}),a("td",{children:["$",s.current_price.toLocaleString()]}),r("td",{className:s.price_change_percentage_24h>0?"text-success":"text-danger",children:s.price_change_percentage_24h}),a("td",{children:["$",s.total_volume.toLocaleString()]})]})}const g=["#","Coin","Price","Price Change","24h Volume"],x=({coins:s,search:n})=>{const c=s.filter(o=>o.name.toLowerCase().includes(n.toLowerCase()));return s?a("table",{className:"table table-dark mt-4 table-hover",children:[r("thead",{children:r("tr",{children:g.map((o,e)=>r("td",{children:o},e))})}),r("tbody",{children:c.map((o,e)=>r(f,{coin:o,index:e+1},o.id))})]}):r("div",{children:"no coins"})};function y(){const[s,n]=l.exports.useState([]),[c,o]=l.exports.useState(""),e=async()=>{try{const t=await u.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");n(t.data),console.log(t.data)}catch(t){console.error(t)}};return l.exports.useEffect(()=>{e()},[]),r("div",{className:"container",children:a("div",{className:"row",children:[r("input",{type:"text",placeholder:"Search a Coin",className:"form-control bg-dark text-light border-0 mt-4 text-center",autoFocus:!0,onChange:t=>o(t.target.value)}),r(x,{coins:s,search:c})]})})}m.render(r(p.StrictMode,{children:r(y,{})}),document.getElementById("root"));
