import {Http} from './http.js';
import {Annonce} from './Models/annonce.js';
import * as fs from 'fs';
import YAML from 'yaml';
// import _ from 'lodash';

/**
 * Mais class
 */
export class Main {
  /**
   * Hello world method
   */
  public async run() {
    Http.init();
    let annonces: Annonce[] = [];
    if (fs.existsSync('./data_exports/se_loger/annonces.yaml')) {
      const parsed = YAML.parse(fs.readFileSync('./data_exports/se_loger/annonces.yaml', 'utf-8'));
      annonces = parsed as any as Annonce[];
    } else {
      let rawdata: any[]|undefined = undefined;
      if (fs.existsSync('./data_exports/se_loger/export.json')) {
        rawdata = JSON.parse(fs.readFileSync('./data_exports/se_loger/export.json', 'utf-8'));
      } else {
        rawdata = await Http.fetchLobstr('8ba5622c0a7e45c3ac633f8eb862a77f', 'cc4423455c2c4c6f8095fb8ba3ace626');
        fs.writeFileSync('./data_exports/se_loger/export.json', JSON.stringify(rawdata, null, 4));
      }
      annonces = rawdata.map((annonceSeLoger) => Main.seLogerToAnnonce(annonceSeLoger));
      fs.writeFileSync('./data_exports/se_loger/annonces.yaml', YAML.stringify(annonces));
    }
    await Promise.all(annonces.map((annonce: Annonce) => fs.writeFileSync(`./data_exports/se_loger/${annonce.Id}.yaml`, YAML.stringify(annonce))));
  }

  /**
   * Convertis un objet scrappé en joli objet
   * @param {any} seloger objet Se loged en provenance du scrapping
   * @return {Annonce} Ho! Le joli objet!
   */
  public static seLogerToAnnonce(seloger: any): Annonce {
    return new Annonce({
      // Id: seloger.id,
      Adresse: seloger.address,
      NomAgenceImmobilière: seloger.agency_contact_name,
      AgenceAEmail: seloger.agency_has_email,
      AgenceId: seloger.agency_id,
      AgenceImage: seloger.agency_img_url,
      AgenceLien: seloger.agency_link,
      AgencePage: seloger.agency_page,
      AgenceTelephone: seloger.agency_phone_number,
      Id: `seloger_${seloger.annonce_id}`,
      Aire: seloger.area,
      NombreDeChambres: seloger.bedrooms_count,
      UnitéBusiness: seloger.business_unit,
      ContactEmail: seloger.contact_email,
      ContactEstUnParticulier: seloger.contact_is_private_seller,
      ChargesCopropriétéAnnuelles: seloger.coownership_annual_charges,
      CopropriétéSousControleDUnSyndic: seloger.coownership_is_syndic_procedure,
      NombreDeLotsCopropriété: seloger.coownership_number_of_lots,
      Description: seloger.description,
      Quartier: seloger.district,
      DiagnostiqueEnergetique: seloger.dpe,
      ConsommationElectrique: seloger.electricity_consumption,
      TypeDeBien: seloger.estate_type,
      TypeDeBienId: seloger.estate_type_id,
      Commodités: seloger.features,
      // seloger.filling_details,
      Ges: seloger.gas_emissions,
      EmissionsGaz: seloger.ges,
      // : seloger.highlighting_level,
      // : seloger.insee_code,
      // : seloger.is_exclusive,
      // : seloger.is_expired,
      Meublé: seloger.is_furnished,
      // : seloger.is_redirected,
      // : seloger.last_scraping_time,
      Latitude: seloger.latitude,
      Longitude: seloger.longitude,
      PhotoUrl: seloger.main_picture,
      PrixMensuel: seloger.monthly_price,
      Nature: seloger.nature,
      Photos: seloger.photos.split(','),
      Position: seloger.position,
      CodePostal: seloger.postal_code,
      Prix: seloger.price,
      // : seloger.price_decrease_percent,
      PrixAuMetreCarré: seloger.price_per_meter,
      PricingPriceNote: seloger.pricing_price_note,
      IdPublication: seloger.publication_id,
      // : seloger.ref,
      NombreDePieces: seloger.rooms,
      // : seloger.scraping_time,
      DescriptionCourte: seloger.short_description,
      Tags: seloger.tags.split(','),
      Titre: seloger.title,
      TypeDeTransaction: seloger.transaction_type,
      Url: seloger.url,
      VideoUrl: seloger.video_url,
      UrlVisiteVistuelle: seloger.virtual_visit_url,
    });
  }
}

const m: Main = new Main();
m.run();
