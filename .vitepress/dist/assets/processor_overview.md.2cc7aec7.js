import{_ as e,o as t,c as o,V as s}from"./chunks/framework.7ae304b1.js";const a="/assets/processor.24f2c356.png",f=JSON.parse('{"title":"Overview","description":"","frontmatter":{},"headers":[],"relativePath":"processor/overview.md","filePath":"processor/overview.md"}'),r={name:"processor/overview.md"},n=s('<h1 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h1><p><img src="'+a+'" alt="processor.png"></p><p>The processor is the CPU of Pinokio. It follows the same scheme all modern CPUs implement (<a href="https://en.wikipedia.org/wiki/Instruction_cycle#Summary_of_stages" target="_blank" rel="noreferrer">fetch-decode-execute cycle</a>)</p><blockquote><p>You can think of Pinokio as an <strong>autonomous state machine</strong> that loads its updated state in realtime and executes commands based on its most recent state, for every step.</p></blockquote><ol><li><strong><a href="./fetch.html">Fetch (Loader)</a>:</strong> The loader engine instantiates the state machine (including the memory as well as <code>self</code>, which refers to its own code)</li><li><strong><a href="./decode.html">Decode (Template)</a>:</strong> The template engine takes a template expression and instantiates it using the current state provided by the loader</li><li><strong><a href="./execute.html">Execute (Runner)</a>:</strong> The runner takes the instantiated request and executes it.</li></ol>',5),i=[n];function c(l,d,h,p,m,_){return t(),o("div",null,i)}const v=e(r,[["render",c]]);export{f as __pageData,v as default};
