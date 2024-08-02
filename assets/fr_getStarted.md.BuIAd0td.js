import{_ as e,c as r,o as a,a2 as i}from"./chunks/framework.BThh_NHy.js";const h=JSON.parse('{"title":"Commencer avec la Programmation en C","description":"","frontmatter":{},"headers":[],"relativePath":"fr/getStarted.md","filePath":"fr/getStarted.md"}'),t={name:"fr/getStarted.md"},o=i(`<h1 id="commencer-avec-la-programmation-en-c" tabindex="-1">Commencer avec la Programmation en C <a class="header-anchor" href="#commencer-avec-la-programmation-en-c" aria-label="Permalink to &quot;Commencer avec la Programmation en C&quot;">​</a></h1><p>Bienvenue dans vos premiers pas en programmation C ! Dans ce chapitre, nous allons vous préparer et vous permettre d&#39;écrire votre premier programme C en utilisant un compilateur en ligne. Plongeons-nous dedans !</p><h2 id="pourquoi-commencer-avec-un-compilateur-en-ligne" tabindex="-1">Pourquoi Commencer avec un Compilateur en Ligne ? <a class="header-anchor" href="#pourquoi-commencer-avec-un-compilateur-en-ligne" aria-label="Permalink to &quot;Pourquoi Commencer avec un Compilateur en Ligne ?&quot;">​</a></h2><p>Un compilateur en ligne est un excellent choix pour les débutants :</p><ul><li><strong>Facilité d&#39;Utilisation</strong> : Pas d&#39;installation requise - ouvrez simplement votre navigateur et commencez à coder.</li><li><strong>Accessibilité</strong> : Accédez à votre code de n&#39;importe où, à tout moment.</li><li><strong>Retour d&#39;Information Immédiat</strong> : Voyez rapidement les résultats de votre code pour vous aider à apprendre et à déboguer.</li></ul><p>Nous utiliserons le <a href="https://www.programiz.com/c-programming/online-compiler/" target="_blank" rel="noreferrer">compilateur en ligne Programiz</a> pour ce tutoriel. Il est convivial et parfait pour débuter en C.</p><h2 id="guide-etape-par-etape-pour-utiliser-le-compilateur-en-ligne-programiz" tabindex="-1">Guide Étape par Étape pour Utiliser le Compilateur en Ligne Programiz <a class="header-anchor" href="#guide-etape-par-etape-pour-utiliser-le-compilateur-en-ligne-programiz" aria-label="Permalink to &quot;Guide Étape par Étape pour Utiliser le Compilateur en Ligne Programiz&quot;">​</a></h2><h3 id="_1-accedez-au-compilateur-en-ligne" tabindex="-1">1. Accédez au Compilateur en Ligne <a class="header-anchor" href="#_1-accedez-au-compilateur-en-ligne" aria-label="Permalink to &quot;1. Accédez au Compilateur en Ligne&quot;">​</a></h3><p>Ouvrez votre navigateur web et accédez au <a href="https://www.programiz.com/c-programming/online-compiler/" target="_blank" rel="noreferrer">compilateur en ligne Programiz</a>.</p><h3 id="_2-ecrivez-votre-premier-programme-c" tabindex="-1">2. Écrivez Votre Premier Programme C <a class="header-anchor" href="#_2-ecrivez-votre-premier-programme-c" aria-label="Permalink to &quot;2. Écrivez Votre Premier Programme C&quot;">​</a></h3><p>Vous verrez un modèle par défaut dans l&#39;éditeur. Remplaçons-le par notre propre code. Tapez ou collez le programme C suivant :</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, World!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Voici ce que fait chaque partie du code :</p><ul><li><strong>#include &lt;stdio.h&gt;</strong> : Inclut la bibliothèque standard d&#39;entrée-sortie pour utiliser la fonction printf.</li><li><strong>int main() { ... }</strong> : La fonction principale où commence l&#39;exécution.</li><li><strong>printf(&quot;Hello, World!\\n&quot;);</strong> : Imprime &quot;Hello, World!&quot; sur la console.</li><li><strong>return 0;</strong> : Termine le programme avec succès.</li></ul><h3 id="_3-executez-votre-code" tabindex="-1">3. Exécutez Votre Code <a class="header-anchor" href="#_3-executez-votre-code" aria-label="Permalink to &quot;3. Exécutez Votre Code&quot;">​</a></h3><p>Cliquez sur le bouton &quot;Run&quot; sous l&#39;éditeur pour exécuter votre programme. La sortie apparaîtra dans la section console sous l&#39;éditeur de code. Vous devriez voir :</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Hello, World!</span></span></code></pre></div><h3 id="_4-explorez-les-fonctionnalites-du-compilateur-programiz" tabindex="-1">4. Explorez les Fonctionnalités du Compilateur Programiz <a class="header-anchor" href="#_4-explorez-les-fonctionnalites-du-compilateur-programiz" aria-label="Permalink to &quot;4. Explorez les Fonctionnalités du Compilateur Programiz&quot;">​</a></h3><ul><li><strong>Enregistrez Votre Code</strong> : Cliquez sur le bouton &quot;Save&quot; pour enregistrer votre code. Vous obtiendrez une URL unique que vous pourrez mettre en favori ou partager.</li><li><strong>Charger des Exemples</strong> : Utilisez le bouton &quot;Examples&quot; pour voir des programmes exemples et apprendre différents concepts.</li><li><strong>Partager et Intégrer</strong> : Partagez votre code avec d&#39;autres ou intégrez-le dans des sites web à l&#39;aide des liens fournis.</li></ul><h3 id="_5-debogage-et-amelioration-de-votre-code" tabindex="-1">5. Débogage et Amélioration de Votre Code <a class="header-anchor" href="#_5-debogage-et-amelioration-de-votre-code" aria-label="Permalink to &quot;5. Débogage et Amélioration de Votre Code&quot;">​</a></h3><p>Le compilateur Programiz inclut également des outils de débogage de base :</p><ul><li><strong>Définir des Points d&#39;Arrêt</strong> : Cliquez sur le numéro de ligne pour définir des points d&#39;arrêt et déboguer votre code.</li><li><strong>Exécuter Pas à Pas</strong> : Utilisez la fonctionnalité pas à pas pour exécuter votre code ligne par ligne et inspecter les variables.</li><li><strong>Étapes Suivantes</strong> : Explorer la Programmation en C</li></ul><p>Félicitations pour avoir écrit et exécuté votre premier programme C ! Vous êtes maintenant prêt à plonger plus profondément dans la programmation C. Dans les prochains chapitres, nous couvrirons :</p><ul><li><strong>Syntaxe de Base</strong> : Apprenez les blocs de construction fondamentaux de la programmation en C.</li><li><strong>Sortie</strong> : Comprenez comment afficher des données en utilisant printf.</li><li><strong>Commentaires</strong> : Ajoutez des commentaires à votre code pour le rendre plus lisible.</li></ul><p>N&#39;hésitez pas à expérimenter avec le <a href="https://www.programiz.com/c-programming/online-compiler/" target="_blank" rel="noreferrer">compilateur Programiz</a>, essayez différents extraits de code et explorez les fonctionnalités qu&#39;il offre.</p>`,25),n=[o];function s(l,p,u,c,d,m){return a(),r("div",null,n)}const v=e(t,[["render",s]]);export{h as __pageData,v as default};
