/**
 * Fichier descriptif d'une annonce
 */
export class Annonce {
  public Adresse: string | undefined = undefined;
  public Meublé: boolean | undefined = undefined;
  public NomAgenceImmobilière: string | undefined = undefined;
  public AgenceAEmail: boolean | undefined = undefined;
  public AgenceId: number | undefined = undefined;
  public AgenceImage: string | undefined = undefined;
  public AgenceLien: string | undefined = undefined;
  public AgencePage: string | undefined = undefined;
  public AgenceTelephone: string | undefined = undefined;
  public Id: string | undefined = undefined;
  public Aire: number | undefined = undefined;
  public UnitéBusiness: number | undefined = undefined;
  public CollectéA: string | undefined = undefined;
  public Quartier: string | undefined = undefined;
  public TypeDeBien: string | undefined = undefined;
  public TypeDeBienId: number | undefined = undefined;
  public Exclusivité: boolean | undefined = undefined;
  public AnnonceExpirée: boolean | undefined = undefined;
  public PrixMensuel: number | undefined = undefined;
  public NativeId: string | undefined = undefined;
  public Nature: string | undefined = undefined;
  public Photos: string[] | undefined = undefined;
  public Position: number | undefined = undefined;
  public CodePostal: string | undefined = undefined;
  public Prix: number | undefined = undefined;
  public PrixAuMetreCarré: number | undefined = undefined;
  public PricingPriceNote: number | undefined = undefined;
  public IdPublication: number | undefined = undefined;
  public DiagnostiqueEnergetique: string | undefined = undefined;
  public ConsommationElectrique: number | undefined = undefined;
  public Ges: string | undefined = undefined;
  public EmissionsGaz: number | undefined = undefined;
  public Commodités: string | undefined = undefined;
  public NombreDePieces: number | undefined = undefined;
  public NombreDeChambres: number | undefined = undefined;
  public Titre: string | undefined = undefined;
  public Description: string | undefined = undefined;
  public DescriptionCourte: string | undefined = undefined;
  public Tags: string[] | undefined = undefined;
  public TypeDeTransaction: number | undefined = undefined;
  public Url: string | undefined = undefined;
  public PhotoUrl: string | undefined = undefined;
  public VideoUrl: string | undefined = undefined;
  public VisiteVistuelle: boolean | undefined = undefined;
  public UrlVisiteVistuelle: boolean | undefined = undefined;
  public Latitude: number | undefined = undefined;
  public Longitude: number | undefined = undefined;
  public ChargesCopropriétéAnnuelles: number | undefined = undefined;
  public NombreDeLotsCopropriété: number | undefined = undefined;
  public CopropriétéSousControleDUnSyndic: boolean | undefined = undefined;
  public ContactEmail: string | undefined = undefined;
  public ContactEstUnParticulier: boolean | undefined = undefined;

  /**
   * Constructor
   * @param {Partial<Annonce>} init Init object
   */
  public constructor(init?:Partial<Annonce>) {
    Object.assign(this, init);
  }
}
