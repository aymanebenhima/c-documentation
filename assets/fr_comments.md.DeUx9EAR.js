import{_ as s,c as e,o as i,a2 as a}from"./chunks/framework.BThh_NHy.js";const u=JSON.parse('{"title":"Commentaires en C : Les Notes dans Votre Code","description":"","frontmatter":{},"headers":[],"relativePath":"fr/comments.md","filePath":"fr/comments.md"}'),n={name:"fr/comments.md"},t=a(`<h1 id="commentaires-en-c-les-notes-dans-votre-code" tabindex="-1">Commentaires en C : Les Notes dans Votre Code <a class="header-anchor" href="#commentaires-en-c-les-notes-dans-votre-code" aria-label="Permalink to &quot;Commentaires en C : Les Notes dans Votre Code&quot;">​</a></h1><p>En programmation C, les commentaires sont comme des notes que vous ajoutez à votre code pour expliquer, clarifier et documenter ce que fait votre code. Ils sont essentiels pour rendre votre code plus lisible et maintenable, surtout lorsque vous travaillez avec d&#39;autres ou que vous revenez à votre code après un certain temps. Plongeons dans le monde des commentaires et voyons comment ils peuvent améliorer votre expérience de codage.</p><h2 id="que-sont-les-commentaires" tabindex="-1">Que Sont les Commentaires ? <a class="header-anchor" href="#que-sont-les-commentaires" aria-label="Permalink to &quot;Que Sont les Commentaires ?&quot;">​</a></h2><p>Les commentaires sont des morceaux de texte intégrés dans votre code qui sont ignorés par le compilateur. Ils sont destinés aux lecteurs humains, fournissant des explications et des insights sur l&#39;objectif et la fonctionnalité du code.</p><h2 id="types-de-commentaires" tabindex="-1">Types de Commentaires <a class="header-anchor" href="#types-de-commentaires" aria-label="Permalink to &quot;Types de Commentaires&quot;">​</a></h2><p>C supporte deux types de commentaires :</p><h3 id="_1-commentaires-sur-une-ligne-les-notes-rapides" tabindex="-1">1. Commentaires sur une Ligne : Les Notes Rapides <a class="header-anchor" href="#_1-commentaires-sur-une-ligne-les-notes-rapides" aria-label="Permalink to &quot;1. Commentaires sur une Ligne : Les Notes Rapides&quot;">​</a></h3><p>Les commentaires sur une ligne sont utilisés pour des explications ou des notes brèves sur une seule ligne. Ils commencent par <code>//</code> et continuent jusqu&#39;à la fin de la ligne.</p><h4 id="exemple" tabindex="-1">Exemple <a class="header-anchor" href="#exemple" aria-label="Permalink to &quot;Exemple&quot;">​</a></h4><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> number </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Ceci est un commentaire sur une ligne</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Number: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, number);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Impression du nombre</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_2-commentaires-multi-lignes-les-explications-detaillees" tabindex="-1">2. Commentaires Multi-Lignes : Les Explications Détaillées <a class="header-anchor" href="#_2-commentaires-multi-lignes-les-explications-detaillees" aria-label="Permalink to &quot;2. Commentaires Multi-Lignes : Les Explications Détaillées&quot;">​</a></h3><p>Les commentaires multi-lignes sont utilisés pour des explications plus longues ou pour commenter des blocs de code. Ils commencent par <code>/*</code> et se terminent par <code>*/</code>. Vous pouvez les étendre sur plusieurs lignes.</p><h4 id="exemple-1" tabindex="-1">Exemple <a class="header-anchor" href="#exemple-1" aria-label="Permalink to &quot;Exemple&quot;">​</a></h4><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * Ceci est un commentaire multi-lignes.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * Il peut s&#39;étendre sur plusieurs lignes et est utile pour</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * des explications plus longues ou pour commenter de plus grands blocs de code.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> number </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Number: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, number);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="bonnes-pratiques-pour-utiliser-les-commentaires" tabindex="-1">Bonnes Pratiques pour Utiliser les Commentaires <a class="header-anchor" href="#bonnes-pratiques-pour-utiliser-les-commentaires" aria-label="Permalink to &quot;Bonnes Pratiques pour Utiliser les Commentaires&quot;">​</a></h2><p>Pour tirer le meilleur parti des commentaires, suivez ces bonnes pratiques :</p><h3 id="soyez-clair-et-concis" tabindex="-1">Soyez Clair et Concis <a class="header-anchor" href="#soyez-clair-et-concis" aria-label="Permalink to &quot;Soyez Clair et Concis&quot;">​</a></h3><p>Écrivez des commentaires qui expliquent clairement ce que fait le code. Évitez les explications vagues ou trop complexes.</p><h3 id="evitez-les-redondances" tabindex="-1">Évitez les Redondances <a class="header-anchor" href="#evitez-les-redondances" aria-label="Permalink to &quot;Évitez les Redondances&quot;">​</a></h3><p>Ne dites pas l&#39;évidence. Par exemple, des commentaires comme <code>int a = 10; // Set a to 10</code> sont redondants si le code est explicite.</p><h3 id="mettez-a-jour-les-commentaires" tabindex="-1">Mettez à Jour les Commentaires <a class="header-anchor" href="#mettez-a-jour-les-commentaires" aria-label="Permalink to &quot;Mettez à Jour les Commentaires&quot;">​</a></h3><p>Gardez les commentaires à jour avec les changements de code. Les commentaires obsolètes peuvent être trompeurs et déroutants.</p><h3 id="utilisez-les-commentaires-pour-la-documentation" tabindex="-1">Utilisez les Commentaires pour la Documentation <a class="header-anchor" href="#utilisez-les-commentaires-pour-la-documentation" aria-label="Permalink to &quot;Utilisez les Commentaires pour la Documentation&quot;">​</a></h3><p>Utilisez des commentaires pour décrire l&#39;objectif des fonctions, des paramètres et des valeurs de retour. Cela aide les autres (et vous-même plus tard) à comprendre comment utiliser votre code.</p><h4 id="exemple-2" tabindex="-1">Exemple <a class="header-anchor" href="#exemple-2" aria-label="Permalink to &quot;Exemple&quot;">​</a></h4><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Fonction : addNumbers</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * ----------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Ajoute deux entiers et renvoie le résultat.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * a : Le premier entier.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * b : Le deuxième entier.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * renvoie : La somme de a et b.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> addNumbers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // Ajouter les deux nombres</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> addNumbers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Résultat : </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, result);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="exercice-pratique" tabindex="-1">Exercice Pratique <a class="header-anchor" href="#exercice-pratique" aria-label="Permalink to &quot;Exercice Pratique&quot;">​</a></h2><p>Écrivez un programme qui inclut à la fois des commentaires sur une ligne et des commentaires multi-lignes. Assurez-vous de fournir des explications significatives pour l&#39;objectif de votre code et ses différentes sections. Expérimentez avec le commentaire de différentes parties de votre code pour comprendre comment les commentaires peuvent être utilisés à la fois pour la documentation et le débogage.</p><hr><p>Les commentaires sont les notes et les explications qui rendent votre code plus facile à comprendre et à maintenir. Ils sont une partie essentielle de l&#39;écriture de code propre et efficace. Ensuite, explorons le chapitre <a href="./variables.html">Variables</a> pour comprendre comment gérer et utiliser les données dans vos programmes de manière efficace.</p>`,30),l=[t];function r(p,h,o,d,k,c){return i(),e("div",null,l)}const g=s(n,[["render",r]]);export{u as __pageData,g as default};
