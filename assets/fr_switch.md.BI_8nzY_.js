import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.BThh_NHy.js";const E=JSON.parse(`{"title":"L'instruction Switch en C : Le Navigateur Multi-Chemin","description":"","frontmatter":{},"headers":[],"relativePath":"fr/switch.md","filePath":"fr/switch.md"}`),e={name:"fr/switch.md"},t=n(`<h1 id="l-instruction-switch-en-c-le-navigateur-multi-chemin" tabindex="-1">L&#39;instruction Switch en C : Le Navigateur Multi-Chemin <a class="header-anchor" href="#l-instruction-switch-en-c-le-navigateur-multi-chemin" aria-label="Permalink to &quot;L&#39;instruction Switch en C : Le Navigateur Multi-Chemin&quot;">​</a></h1><p>L&#39;instruction <code>switch</code> en C est votre navigateur multi-chemin, vous permettant d&#39;exécuter un bloc de code parmi de nombreuses options en fonction de la valeur d&#39;une variable. C&#39;est une alternative structurée et lisible à l&#39;utilisation de multiples instructions <code>if-else</code>, rendant votre processus de prise de décision plus fluide.</p><h2 id="syntaxe" tabindex="-1">Syntaxe <a class="header-anchor" href="#syntaxe" aria-label="Permalink to &quot;Syntaxe&quot;">​</a></h2><p>L&#39;instruction <code>switch</code> vous guide à travers plusieurs chemins avec facilité :</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">switch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(expression) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> constant1:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // code à exécuter si l&#39;expression est égale à constant1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> constant2:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // code à exécuter si l&#39;expression est égale à constant2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // vous pouvez avoir n&#39;importe quel nombre d&#39;instructions case</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // code à exécuter si l&#39;expression ne correspond à aucun cas</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="exemple" tabindex="-1">Exemple <a class="header-anchor" href="#exemple" aria-label="Permalink to &quot;Exemple&quot;">​</a></h2><p>Partons en voyage avec notre navigateur multi-chemin :</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> day </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    switch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (day) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        case</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Lundi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        case</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Mardi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        case</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Mercredi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        case</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Jeudi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        case</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Vendredi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        case</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Samedi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        case</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Dimanche</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Jour invalide</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Dans cet exemple, le navigateur évalue la valeur de <code>day</code> et dirige le programme pour afficher <code>Jeudi</code>, car <code>day</code> est égal à 4.</p><h2 id="points-cles" tabindex="-1">Points Clés <a class="header-anchor" href="#points-cles" aria-label="Permalink to &quot;Points Clés&quot;">​</a></h2><ul><li><strong>Instruction Break</strong> : Chaque <code>case</code> doit se terminer par une instruction <code>break</code> pour éviter l&#39;effet de fall-through. Si vous omettez <code>break</code>, le programme continue avec le cas suivant, ce qui pourrait ne pas être le comportement souhaité.</li><li><strong>Cas Default</strong> : Le cas <code>default</code> est facultatif mais recommandé. Il attrape toutes les valeurs qui ne correspondent pas aux cas spécifiés, agissant comme un filet de sécurité.</li></ul><h2 id="quand-utiliser-les-instructions-switch" tabindex="-1">Quand Utiliser les Instructions Switch ? <a class="header-anchor" href="#quand-utiliser-les-instructions-switch" aria-label="Permalink to &quot;Quand Utiliser les Instructions Switch ?&quot;">​</a></h2><p>L&#39;instruction <code>switch</code> brille lorsque vous avez plusieurs valeurs possibles pour une seule variable et que vous devez exécuter un code différent pour chaque valeur. Elle est particulièrement utile pour :</p><ul><li><strong>Sélection de Menu</strong> : Naviguer à travers différentes options de menu dans une interface utilisateur.</li><li><strong>Traitement de Commandes</strong> : Gérer diverses commandes ou entrées des utilisateurs.</li><li><strong>Catégorisation</strong> : Grouper des éléments en catégories basées sur des critères spécifiques.</li></ul><h2 id="avantages-des-instructions-switch" tabindex="-1">Avantages des Instructions Switch <a class="header-anchor" href="#avantages-des-instructions-switch" aria-label="Permalink to &quot;Avantages des Instructions Switch&quot;">​</a></h2><ul><li><strong>Lisibilité</strong> : Rend votre code plus propre et plus facile à lire par rapport à plusieurs instructions <code>if-else</code>.</li><li><strong>Efficacité</strong> : Souvent plus efficace que plusieurs instructions <code>if-else</code>, car le compilateur peut optimiser les instructions <code>switch</code> plus efficacement.</li></ul><h2 id="exercice-pratique" tabindex="-1">Exercice Pratique <a class="header-anchor" href="#exercice-pratique" aria-label="Permalink to &quot;Exercice Pratique&quot;">​</a></h2><p>Créez un programme qui prend un caractère en entrée de l&#39;utilisateur et utilise une instruction <code>switch</code> pour indiquer si le caractère est une voyelle (<code>a, e, i, o, u</code>) ou une consonne.</p><hr><p>Avec l&#39;instruction <code>switch</code>, vous disposez désormais d&#39;un outil puissant pour naviguer à travers plusieurs conditions sans effort. Passez au chapitre <a href="./loops.html">Boucles</a> pour apprendre à répéter des actions avec précision et créativité dans vos programmes en C.</p>`,20),l=[t];function h(p,r,k,c,d,o){return a(),i("div",null,l)}const g=s(e,[["render",h]]);export{E as __pageData,g as default};
