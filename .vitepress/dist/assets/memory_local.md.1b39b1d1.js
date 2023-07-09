import{_ as e,o as a,c as t,V as l}from"./chunks/framework.7ae304b1.js";const m=JSON.parse('{"title":"local variable","description":"","frontmatter":{},"headers":[],"relativePath":"memory/local.md","filePath":"memory/local.md"}'),r={name:"memory/local.md"},o=l('<h1 id="local-variable" tabindex="-1">local variable <a class="header-anchor" href="#local-variable" aria-label="Permalink to &quot;local variable&quot;">​</a></h1><p>The local variable is every variable prefixed with <code>local.</code>. For example:</p><ul><li><code>local.items</code></li><li><code>local.prompt</code></li></ul><p>Local variables are reset whenever the script finishes running, which means if you run a script once, and run it again, they will always start from scratch.</p><p>There are a couple of ways to set the local variable:</p><ol><li><a href="./../api/datastructure.html#set">set</a>: There is a dedictated method called <code>set</code> that lets you update local variables.</li><li><a href="./../processor/execute.html#returns">returns</a>: every step (request) can have a <code>returns</code> attribute. The <code>returns</code> attribute is used to assign the return value to either a local variable or a global variable.</li></ol>',6),c=[o];function i(s,n,d,h,u,p){return a(),t("div",null,c)}const v=e(r,[["render",i]]);export{m as __pageData,v as default};
