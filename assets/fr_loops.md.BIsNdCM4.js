import{_ as s,c as e,o as i,a2 as a}from"./chunks/framework.BThh_NHy.js";const E=JSON.parse('{"title":"Les Boucles en C","description":"","frontmatter":{},"headers":[],"relativePath":"fr/loops.md","filePath":"fr/loops.md"}'),n={name:"fr/loops.md"},t=a(`<h1 id="les-boucles-en-c" tabindex="-1">Les Boucles en C <a class="header-anchor" href="#les-boucles-en-c" aria-label="Permalink to &quot;Les Boucles en C&quot;">​</a></h1><p>Les boucles sont le cœur battant de la programmation, vous permettant de répéter des actions, d&#39;automatiser des tâches et de créer des programmes dynamiques. En C, nous disposons de boucles puissantes comme <code>for</code> et <code>while</code> pour contrôler le flux de notre code et faire danser nos programmes à notre rythme.</p><h2 id="boucle-for-le-danseur-de-precision" tabindex="-1">Boucle For : Le Danseur de Précision <a class="header-anchor" href="#boucle-for-le-danseur-de-precision" aria-label="Permalink to &quot;Boucle For : Le Danseur de Précision&quot;">​</a></h2><p>La boucle <code>for</code> est comme un danseur de précision, parfaite lorsque vous savez exactement combien de pas effectuer. C&#39;est la boucle de prédilection pour les itérations fixes, apportant ordre et structure à votre code.</p><h3 id="syntaxe" tabindex="-1">Syntaxe <a class="header-anchor" href="#syntaxe" aria-label="Permalink to &quot;Syntaxe&quot;">​</a></h3><p>La chorégraphie de la boucle <code>for</code> se compose de trois parties principales : initialisation, condition et incrément/décrément.</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (initialization; condition; increment) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // code à exécuter</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="exemple" tabindex="-1">Exemple <a class="header-anchor" href="#exemple" aria-label="Permalink to &quot;Exemple&quot;">​</a></h3><p>Regardons notre danseur de précision en action :</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Step </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Dans cette performance, notre boucle s&#39;exécute gracieusement 5 fois, comptant chaque pas de 1 à 5.</p><h2 id="boucle-while-l-esprit-libre" tabindex="-1">Boucle While : L&#39;Esprit Libre <a class="header-anchor" href="#boucle-while-l-esprit-libre" aria-label="Permalink to &quot;Boucle While : L&#39;Esprit Libre&quot;">​</a></h2><p>La boucle <code>while</code> est l&#39;esprit libre des boucles, continuant son parcours tant que la condition est vraie. Elle est idéale lorsque le nombre d&#39;itérations n&#39;est pas connu à l&#39;avance, donnant à votre code la liberté d&#39;explorer.</p><h3 id="syntaxe-1" tabindex="-1">Syntaxe <a class="header-anchor" href="#syntaxe-1" aria-label="Permalink to &quot;Syntaxe&quot;">​</a></h3><p>Le mantra de la boucle <code>while</code> est simple :</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (condition) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // code à exécuter</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="exemple-1" tabindex="-1">Exemple <a class="header-anchor" href="#exemple-1" aria-label="Permalink to &quot;Exemple&quot;">​</a></h3><p>Voici notre esprit libre en action :</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Journey Step </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Dans cette aventure, notre boucle s&#39;exécute 5 fois, comptant chaque pas de 1 à 5, tout comme notre boucle <code>for</code>, mais avec une approche plus ouverte.</p><h2 id="points-cles" tabindex="-1">Points Clés <a class="header-anchor" href="#points-cles" aria-label="Permalink to &quot;Points Clés&quot;">​</a></h2><ul><li><strong>Initialisation</strong> : La boucle <code>for</code> prépare son danseur avant que la performance ne commence. La boucle <code>while</code> vérifie la condition avant chaque pas.</li><li><strong>Condition</strong> : Les deux boucles évaluent une condition avant d&#39;exécuter leurs mouvements. Si la condition échoue, la boucle s&#39;incline et sort.</li><li><strong>Incrément/Décrément</strong> : La boucle <code>for</code> met à jour gracieusement le compteur après chaque pas. Dans la boucle <code>while</code>, vous devez vous assurer que le compteur avance à l&#39;intérieur de la boucle.</li></ul><h2 id="quand-utiliser-les-boucles-for-et-while" tabindex="-1">Quand Utiliser les Boucles For et While ? <a class="header-anchor" href="#quand-utiliser-les-boucles-for-et-while" aria-label="Permalink to &quot;Quand Utiliser les Boucles For et While ?&quot;">​</a></h2><ul><li><strong>Boucle For</strong> : Utilisez le danseur de précision lorsque vous avez un nombre clair de pas, comme itérer à travers un tableau ou effectuer un nombre défini de calculs.</li><li><strong>Boucle While</strong> : Adoptez l&#39;esprit libre lorsque le chemin est inconnu, comme lire des entrées jusqu&#39;à ce qu&#39;une certaine condition soit remplie ou traiter des données jusqu&#39;à ce qu&#39;un état spécifique soit atteint.</li></ul><h2 id="exercice-pratique" tabindex="-1">Exercice Pratique <a class="header-anchor" href="#exercice-pratique" aria-label="Permalink to &quot;Exercice Pratique&quot;">​</a></h2><p>Créez un programme où le danseur de précision (boucle <code>for</code>) affiche les 10 premiers nombres pairs et l&#39;esprit libre (boucle <code>while</code>) affiche les 10 premiers nombres impairs. Regardez vos boucles performer et donner vie à votre code !</p><hr><p>Maintenant que vous avez vu l&#39;élégance des boucles en C, passez au chapitre <a href="./breakContinue.html">Break et Continue</a> pour apprendre à contrôler le flux et ajouter plus de finesse à votre danse de programmation.</p>`,28),l=[t];function r(p,o,h,c,d,k){return i(),e("div",null,l)}const g=s(n,[["render",r]]);export{E as __pageData,g as default};
