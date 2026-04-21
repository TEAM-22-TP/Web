# 09. 10. 2025

### Organizácie projektu
- Cieľom tímového projektu nie je len vytvoriť produkt, ale hlavne naučiť sa pracovať vo väčších tímoch.
- Hodnotenie je individuálne podľa plnenia úloh.
- Team leader je zodpovedný za plnenie úloh a ak ich niekto neplní, tak to má reportovať.
- Môžeme si vybrať metodológiu riadenia akú chceme, ale keďže sa na predmete preberá SCRUM, tak ten je preferovaný.
- Každý tím potrebuje stránku — stačí nejaká primitívna statická.
- Z meetingov je potrebné spraviť zápisnicu a dať ju na stránku — za toto je zodpovedný team leader.

### Cieľ projektu
- Cieľom projektu je vytvoriť digitálne dvojča assembly line.
- Tento projekt má trvať tri roky, my robíme iba prvý rok.
- Digitálne dvojča zobrazuje na základe dát zbieraných zo senzorov, čo sa deje v reálnom svete, a umožňuje na základe analytiky ovládať reálny systém, aby bol optimalizovaný.
- Pre nás zatiaľ stačí spraviť prijímanie a storage dát a ich vizualizáciu.
- Na dvojča už existujú riešenia — boli spomenuté MatLab, Ansys, ale sú aj iné.
- Treba spraviť analýzu možných formátov dát — firma, pre ktorú to robíme, má povinnosť povedať, aké používa, ale to ešte nespravili a nevie sa, kedy to urobia — máme sa pripraviť.
- V popise projektu sú spomenuté niektoré technológie, tie by sa mali pozrieť.

### Čo treba spraviť
- Určiť si roly jednotlivých ľudí
- Vybrať si, ako budeme organizovať prácu
- Urobiť stránku

### Záver
- Meeting bude prebiehať znova budúci týždeň v rovnakom čase.


# 23. 10. 2025

### Dáta a architektúra
- Každý senzor má vlastný protokol.  
- Existuje router/middleware, ktorý zbiera tieto protokoly a prevádza ich do jednotného formátu.  
- V zadaní projektu sú spomenuté industry-standard technológie — treba sa na ne v analýze pripraviť, aby sme boli ready, keď sa dozvieme, čo sa konkrétne používa.  

### Spracovanie a ukladanie dát
- Zistiť spôsoby spracovania a ukladania dát — možné riešenia:  
  - MongoDB  
  - Cassandra  
  - Dynamo  
  - AWS  
- Preskúmať:
  - Dáta zo senzorov — aké sú industry protokoly a ako fungujú siete.  
  - Ako nám dáta prídu (formát, frekvencia, prenosový kanál).  
  - Kam ich budeme ukladať (databáza, cloud, lokálne riešenie).  
  - Digitálne dvojčatá v praxi — zistiť, či sa to musí robiť custom, alebo existujú hotové riešenia (aj platené).  
  - Ako poslať veci z našej dvojičky späť do systému (napr. ovládacie signály).

### Digitálne dvojča
- Predstavuje zobrazenú reprezentáciu strojov.  
- Obsahuje digitálne tlačidlá, ktoré ovládajú reálne stroje.  
- Umožňuje analytiku, predpovedanie a machine learning.  
- Niektorí to robia priamo v Unity.  
- V praxi sa to často robí custom riešeniami.

### Organizácia projektu
- Každý má priradenú úlohu.  
- Na týždeň je určený počet hodín, ktoré treba odpracovať.  
- Spolupráca ešte nie je rozbehnutá — projekt sa realizuje ako TP, pretože je to menšie riziko než výskumná skupina.  
- V zmluve sú definované deliverables (napr. vedecké články).  
- Ak TP zlyhá, projekt prevezme výskumná skupina.  
- Ide o výskumný projekt — je možný aj výsledok, že dokážeme, že to nejde spraviť.  
- Platené riešenia bude hradiť fakulta (s rozumným výsledkom a miere).

# 13. 11. 2025

### Výlet
- Návšteva výrobnej linky vo firme.  
- Firma aktuálne nemá dostatočné technologické poznatky v oblasti digitálnych dvojčiat, budeme musieť viac navrhovať riešenia my.  
- Potrebný brainstorming: aké senzory by sa dali pridať — vo formáte *„ak sa pridá senzor X, získame dáta Y a umožníme funkciu Z“*.  
- Na mieste treba zistiť, aké senzory sú už nasadené a aká je existujúca infraštruktúra (sieť, servery, PLC, protokoly).  
- Cieľom je vedieť ingestovať dáta z OPC prostredia (napr. pomocou nástroja typu Eclipse Ditto alebo podobných riešení).  
- Firma chce **state-of-the-art** riešenie, nie len jednoduchý proof-of-concept.  
- Na základe výletu sa má spresniť, čo presne treba robiť v projekte (funkčný rozsah, priority, technológie).  
- Všetci, ktorí idú na výlet, majú poslať, v ktorých hodinách budú chýbať, aby mohla byť vybavená ospravedlnenka.

### Konkrétne tasky
- **Dokumentácia linky** – spraviť prehľad výrobných krokov, použitých strojov, senzorov a tokov materiálu.  
- **Analýza vstupných dát** – aké dáta vieme získať (typy senzorov, frekvencia, formáty, protokoly), aké dáta ešte chýbajú.  
- **Vytvorenie wiki** – spraviť internú dokumentáciu (napr. pomocou MkDocs) pre:
  - popis linky,  
  - technickú infraštruktúru,  
  - dátové toky,  
  - návrhy možných rozšírení.

### Poznámky
- Pozrieť koncept **Medallion Architecture** (bronze / silver / gold vrstvy).  
- Pre náš projekt chceme minimálne **bronze tier** – spoľahlivé ukladanie raw dát v konzistentnom formáte.  
- Riešenie navrhovať tak, aby podporovalo **realtime** spracovanie dát (čo najnižšia latencia od senzora po vizualizáciu/analytiku).  
- Do budúcna je cieľom umožniť **ovládanie linky** priamo z našej aplikácie (posielanie spätných povelov do systému).

### Sen
- **Dlhodobá vízia:** realtime meniť konfiguráciu linky na základe senzorov – napríklad dynamicky upravovať dĺžku varenia podľa veľkosti zemiakov alebo iných parametrov, aby sa optimalizovala kvalita a efektivita výroby.


# 23. 02. 2026

### Architektúra riešenia
- Prešli sme návrh architektúry nášho riešenia podľa pripraveného diagramu digitálneho dvojčaťa.
- OPC UA server predstavuje napojenie na linku a translačná vrstva slúži na prevod dát do jednotného interného formátu.
- V aplikačnej vrstve sme si definovali hlavné komponenty: MQTT broker, ingest worker, databázu, controller a frontend.
- Architektúra má byť pripravená nielen na zber a vizualizáciu dát, ale aj na budúce posielanie riadiacich povelov späť do systému.

### Dohody
- Hlavný tok dát bude v smere OPC UA -> translačná vrstva -> MQTT -> ingest worker -> databáza -> frontend.
- Controller ostáva samostatnou súčasťou pre budúce API a ovládanie linky.
- Návrh chceme udržať modulárny, aby sme vedeli neskôr vymeniť zdroj dát alebo doplniť ďalšie služby bez veľkého refaktoru.


# 09. 03. 2026

### Kontrola implementácie
- Prešli sme aktuálny stav implementácie a porovnali ho s pôvodným plánom.
- Máme pripravený základ pipeline vrátane mock OPC UA servera, translačnej vrstvy, ingestu, databázy a vizualizačnej časti.
- Súčasťou riešenia je aj interná wiki, ktorú sme implementovali pomocou AnythingLLM, aby sme na jednom mieste zbierali poznatky o linke a strojoch.
- Po diskusii bolo zrejmé, že v dohľadnom čase nebudeme mať prístup k reálnym prevádzkovým dátam.

### Rozhodnutia
- Keďže reálne dáta nebudú k dispozícii, musíme implementovať vlastný mock data server, na ktorom budeme vedieť overovať celé riešenie.
- Mock dáta majú pokrývať bežnú prevádzku aj chybové a hraničné scenáre.
- Rozhrania chceme navrhnúť čo najbližšie k očakávanému reálnemu nasadeniu, aby bol neskorší prechod jednoduchý.


# 23. 03. 2026

### Dockerizácia a deployment
- Hlavnou témou bolo zjednotenie spúšťania celého riešenia cez Docker a Docker Compose.
- Riešili sme kontajnerizáciu jednotlivých častí systému tak, aby sa dali spoľahlivo spustiť aj mimo development prostredia.
- Dohodli sme sa, že pripravíme deployment na školou určený server, kde bude možné ukázať funkčné nasadenie riešenia.
- Bolo potrebné oddeliť lokálne development nastavenia od konfigurácie pre serverové nasadenie.

### Dohody
- Každá služba má mať jasne definované porty, volume mounty, environment variables a spôsob štartu.
- Nasadenie na školský server má byť reprodukovateľné podľa stručného postupu, aby sa dalo jednoducho zopakovať.
- Pred ostrým deploymentom treba otestovať správanie systému po reštarte kontajnerov a pri výpadku vybraných služieb.


# 20. 04. 2026

### Feedback k prezentácii
- Dostali sme spätnú väzbu k prezentácii nášho riešenia a k tomu, ako komunikujeme jeho prínos.
- Bolo odporučené jasnejšie oddeliť, čo je už implementované, čo je prototyp a čo je zatiaľ iba plán do ďalších etáp.
- Máme výraznejšie vysvetliť, prečo sme museli prejsť na mock dáta a aký význam má vlastný mock server pre vývoj a testovanie.
- V prezentácii treba lepšie ukázať architektúru systému, tok dát medzi komponentmi a prínos internej wiki pre tím.

### Úpravy do ďalšej verzie
- Doplniť konkrétnu ukážku pipeline od OPC UA vrstvy až po frontend.
- Pridať stručný slide o dockerizácii a pripravenosti deploymentu na školský server.
- Skrátiť všeobecný úvod a viac priestoru venovať tomu, čo sme reálne implementovali.
