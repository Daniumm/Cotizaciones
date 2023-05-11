import TableCRUD from "components/TableCRUD/TableCRUD";

interface Entry {
  Cantidad: number;
  CostoEnvio: string;
  CostoImporte: number;
  CostoImporteUSD: number;
  FechaTermino: string;
  NumeroDeParte: string;
  PUCostoMX: number;
  PUCostoUSD: number;
  PUMX: number;
  PUUSD: number;
  PrecioSinPromocion: number;
  Promocion: boolean;
  Proveedor: string;
  SubTotalMN: number;
  SubTotalUSD: number;
  TiempoEntrega: string;
  Unidad: string;
  Descripcion: string;
  Comentarios: string;
  Id: string;
  isNew?:boolean;
}

const entryArray: Entry[] = [
  {
    Cantidad: 3,
    CostoEnvio: 'Gratis',
    CostoImporte: 200,
    CostoImporteUSD: 10,
    FechaTermino: '2023-06-30',
    NumeroDeParte: 'XYZ789',
    PUCostoMX: 80,
    PUCostoUSD: 4,
    PUMX: 100,
    PUUSD: 5,
    PrecioSinPromocion: 120,
    Promocion: false,
    Proveedor: 'Delta Inc.',
    SubTotalMN: 240,
    SubTotalUSD: 12,
    TiempoEntrega: '2 semanas',
    Unidad: 'metro cuadrado',
    Descripcion: 'Lámina de acero galvanizado',
    Comentarios: 'Resistente a la corrosión',
    Id: '004',
    isNew: true
  },
  {
    Cantidad: 1,
    CostoEnvio: '100 MXN',
    CostoImporte: 300,
    CostoImporteUSD: 15,
    FechaTermino: '2023-07-15',
    NumeroDeParte: 'LMN012',
    PUCostoMX: 150,
    PUCostoUSD: 7.5,
    PUMX: 180,
    PUUSD: 9,
    PrecioSinPromocion: 200,
    Promocion: true,
    Proveedor: 'Epsilon S.A.',
    SubTotalMN: 180,
    SubTotalUSD: 9,
    TiempoEntrega: '3 semanas',
    Unidad: 'par',
    Descripcion: 'Zapatos deportivos',
    Comentarios: 'Disponible en varios colores',
    Id: '005',
    isNew: false
  },
  {
    Cantidad: 2,
    CostoEnvio: '50 MXN',
    CostoImporte: 400,
    CostoImporteUSD: 20,
    FechaTermino: '2023-08-01',
    NumeroDeParte: 'OPQ345',
    PUCostoMX: 30,
    PUCostoUSD: 1.5,
    PUMX: 40,
    PUUSD: 2,
    PrecioSinPromocion: 50,
    Promocion: true,
    Proveedor: 'Zeta Ltd.',
    SubTotalMN: 80,
    SubTotalUSD: 4,
    TiempoEntrega: '1 semana',
    Unidad: 'litro',
    Descripcion: 'Limpiador multiusos',
    Comentarios: '',
    Id: '006'
  }
];


const DynamicTablePage = () => {
  return (
    <div>
      <TableCRUD data={entryArray} />
    </div>
  );
};

export default DynamicTablePage;