export var SESSIONID_CODE = 'sessionid';
export var AUTH_TOKEN_CODE = 'auth_token';
export var commaParams = '@';
export var actionId = 2664;
export var newsId = 2663;
export var availabilityCode = 'SKLADEM';
export var imageFileExtPath = '/images/theme/files/';
export var imgagePath = '/files/';
export var imgagePathEmpty = '/images/noimage/';
export var imgageEmptySmall = 'mcled_noimage_S.png';
export var imgageEmptyMedium = 'mcled_noimage_M.png';
export var imgageEmptyLarge = 'mcled_noimage_L.png';
export var imgageEmptyBig = 'mcled_noimage_B.png';
export var sqlListCore =
  'SELECT ' +
  '  \'/\' || p.presmerovani as "redirect", ' +
  '  p.id as "id", ' +
  '  p.kod as "code", ' +
  '  DBMS_LOB.SUBSTR(pp.popis, 250, 1) as "name" ' +
  'FROM ' +
  '  crm_produkty_zatrideni z, ' +
  '  produkty p, ' +
  '  produkty_popis pp, ' +
  '  produkt_eshop_vazby pv, ' +
  '  web_nastaveni_webu_zatr_prod nwz, ' +
  '  web_nastaveni_webu nw, ' +
  '  web_eshopy we, ' +
  '  (select id_produktu from crm_produkty_zatrideni where id_typ_zatrideni_produkt = 2663) ne, ' +
  '  (select id_produktu from crm_produkty_zatrideni where id_typ_zatrideni_produkt = 2664) ac ' +
  'WHERE ' +
  '  nw.presmerovani = :code ' +
  '  and p.matka is null ' +
  '  and p.presmerovani is not null ' +
  '  and p.kod = pp.produkt(+) ' +
  '  and pp.jazyk(+) = \'CZE\' ' +
  '  and pp.website(+) = get_website ' +
  '  and pp.typ_popisu(+) = \'PRODUKT_NAZEV_ZKR\' ' +
  '  and p.kod = pv.produkt ' +
  '  and pv.zobrazit = 1 ' +
  '  and pv.eshop = nw.eshop ' +
  '  and z.ID_TYP_ZATRIDENI_PRODUKT = nwz.id_zatrideni ' +
  '  and z.id_produktu = p.id ' +
  '  and nw.id = nwz.id_nastaveni ' +
  '  and we.user_login = USER ' +
  '  and we.kod = nw.eshop ' +
  '  and p.id = ne.id_produktu(+) ' +
  '  and p.id = ac.id_produktu(+) ';

export var sqlListInfo = 'select ' +
  '  p.id as "id", ' +
  '  e1_web_cena(null, p.kod, null, null, null, null, 1, 1) AS "price", ' +
  '  ((ds.procent / 100) + 1) AS "priceVatKoef", ' +
  '  decode(p.dostupnost_datum, null, pd.nazev, \'Očekáváme\') AS "availability", ' +
  '  NVL(pn.priloha_id, 0) as "imgMediumId", ' +
  '  decode(instr(pdi.popis, \'.\', -1), 0, null, substr(pdi.popis, instr(pdi.popis, \'.\', -1))) as "imgMediumExt", ' +
  '  decode(ac.id_produktu, null, null, 1) as "action", ' +
  '  decode(ne.id_produktu, null, null, 1) as "news",' +
  '  decode(p.dostupnost, \'SKLADEM\', 1, 0) as "inStock", ' +
  '  p.predloha as "patternParams" ' +
  'from ' +
  '  produkty p, ' +
  '  prilohy_nove pn, ' +
  '  prilohy_data_info pdi, ' +
  '  produkty_dostupnost pd, ' +
  '  danove_sazby ds, ' +
  '  (select id_produktu from crm_produkty_zatrideni where id_typ_zatrideni_produkt = ' + newsId + ') ne, ' +
  '  (select id_produktu from crm_produkty_zatrideni where id_typ_zatrideni_produkt = ' + actionId + ') ac ' +
  'where ' +
  '  p.id in (@@IDS@@) ' +
  '  and pn.pk = p.kod ' +
  '  and pn.tabulka = \'PRODUKTY\' ' +
  '  and pdi.crm_priloha_typ = \'IMAGE_MEDIUM_ESHOP\' ' +
  '  and (' +
  '    instr(pdi.popis, \'_1_L.\') > 0 ' +
  '      or ' +
  '    substr(pdi.popis, length(pdi.popis) - 1) = \'_1\' ' +
  '      or ' +
  '    substr(substr(pdi.popis, 1, instr(pdi.popis, \'.\', - 1) - 1), length(substr(pdi.popis, 1, instr(pdi.popis, \'.\', - 1) - 1)) - 1) = \'_1\' ' +
  '  ) ' +
  '  and pdi.id = pn.priloha_id ' +
  '  and ds.kod = p.sazba_dan_pro ' +
  '  and p.id = ne.id_produktu(+) ' +
  '  and p.id = ac.id_produktu(+) ' +
  '  and p.dostupnost = pd.kod(+) ' +
  'group by ' +
  '  p.id, ' +
  '  p.kod, ' +
  '  ds.procent, ' +
  '  p.dostupnost_datum, ' +
  '  pd.nazev, ' +
  '  pn.priloha_id, ' +
  '  ac.id_produktu, ' +
  '  ne.id_produktu, ' +
  '  pdi.popis, ' +
  '  p.dostupnost, ' +
  '  p.predloha';
