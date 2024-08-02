import{_ as i,c as s,o as a,a2 as e}from"./chunks/framework.BThh_NHy.js";const E=JSON.parse('{"title":"Loops in C","description":"","frontmatter":{},"headers":[],"relativePath":"en/loops.md","filePath":"en/loops.md"}'),n={name:"en/loops.md"},t=e(`<h1 id="loops-in-c" tabindex="-1">Loops in C <a class="header-anchor" href="#loops-in-c" aria-label="Permalink to &quot;Loops in C&quot;">​</a></h1><p>Loops are the heartbeats of programming, allowing you to repeat actions, automate tasks, and create dynamic programs. In C, we have powerful loops like <code>for</code> and <code>while</code> to control the flow of our code and make our programs dance to our tunes.</p><h2 id="for-loop-the-precision-dancer" tabindex="-1">For Loop: The Precision Dancer <a class="header-anchor" href="#for-loop-the-precision-dancer" aria-label="Permalink to &quot;For Loop: The Precision Dancer&quot;">​</a></h2><p>The <code>for</code> loop is like a precision dancer, perfect when you know exactly how many steps to take. It’s the go-to loop for fixed iterations, bringing order and structure to your code.</p><h3 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><p>The <code>for</code> loop&#39;s choreography consists of three main parts: initialization, condition, and increment/decrement.</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (initialization; condition; increment) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // code to be executed</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Let’s watch our precision dancer in action:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Step </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>In this performance, our loop gracefully executes 5 times, counting each step from 1 to 5.</p><h2 id="while-loop-the-free-spirit" tabindex="-1">While Loop: The Free Spirit <a class="header-anchor" href="#while-loop-the-free-spirit" aria-label="Permalink to &quot;While Loop: The Free Spirit&quot;">​</a></h2><p>The <code>while</code> loop is the free spirit of loops, continuing its journey as long as the condition is true. It’s ideal when the number of iterations isn’t known upfront, giving your code the freedom to explore.</p><h3 id="syntax-1" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-1" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><p>The <code>while</code> loop’s mantra is simple:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (condition) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // code to be executed</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Here’s our free spirit in action:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Journey Step </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>In this adventure, our loop runs 5 times, counting each step from 1 to 5, just like our <code>for</code> loop, but with a more open-ended approach.</p><h2 id="key-points" tabindex="-1">Key Points <a class="header-anchor" href="#key-points" aria-label="Permalink to &quot;Key Points&quot;">​</a></h2><ul><li><strong>Initialization</strong>: The <code>for</code> loop sets up its dancer before the performance starts. The <code>while</code> loop checks the condition before each step.</li><li><strong>Condition</strong>: Both loops evaluate a condition before executing their moves. If the condition fails, the loop takes a bow and exits.</li><li><strong>Increment/Decrement</strong>: The <code>for</code> loop gracefully updates the counter after each step. In the <code>while</code> loop, you must ensure the counter advances within the loop.</li></ul><h2 id="when-to-use-for-and-while-loops" tabindex="-1">When to Use For and While Loops? <a class="header-anchor" href="#when-to-use-for-and-while-loops" aria-label="Permalink to &quot;When to Use For and While Loops?&quot;">​</a></h2><ul><li><strong>For Loop</strong>: Use the precision dancer when you have a clear number of steps, like iterating through an array or performing a set number of calculations.</li><li><strong>While Loop</strong>: Embrace the free spirit when the path is unknown, like reading input until a certain condition is met or processing data until a specific state is achieved.</li></ul><h2 id="practice-exercise" tabindex="-1">Practice Exercise <a class="header-anchor" href="#practice-exercise" aria-label="Permalink to &quot;Practice Exercise&quot;">​</a></h2><p>Create a program where the precision dancer (<code>for</code> loop) prints the first 10 even numbers and the free spirit (<code>while</code> loop) prints the first 10 odd numbers. Watch your loops perform and bring your code to life!</p><hr><p>Now that you’ve seen the elegance of loops in C, move on to the <a href="./breakContinue.html">Break and Continue</a> chapter to learn how to control the flow and add more finesse to your programming dance.</p>`,28),o=[t];function h(l,p,r,k,d,c){return a(),s("div",null,o)}const u=i(n,[["render",h]]);export{E as __pageData,u as default};
