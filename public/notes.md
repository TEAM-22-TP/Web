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
