import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGridPro,
  GridColDef,
  GridRowParams,
  MuiEvent,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
} from "@mui/x-data-grid-pro";
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
  randomId,
} from "@mui/x-data-grid-generator";
import firebaseConfig from "../../Firebase/firebaseConfig";
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  Timestamp,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

interface Proyecto {
  id?: GridRowId;
  Id: string;
  Celular: string;
  DiasCredito: number;
  Direccion: string;
  DireccionEntrega: string;
  Email: string;
  FechaCreacion: Timestamp;
  Nombre: string;
  NombreContacto: string;
  RFC: string;
  Partidas: CollectionReference<DocumentData>;
  isNew?: boolean;
}

interface Partidas {
  id?: GridRowId;
  Id: string;
  Cantidad: number;
  CostoEnvio: string;
  CostoImporte: number;
  CostoImporteUSD: number;
  FechaTermino: Timestamp;
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
}

interface ExtendedGridRowModel extends Proyecto {
  isNew?: boolean;
}

type ExtendedPartidas = Partidas & { isNew?: boolean };

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
  partidas: any;
  projectId: string;
  setPartidasData: any;
  partidasData: any;
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel, projectId, partidas, partidasData, setPartidasData } =
    props;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const db = getFirestore();
    const projectPartidasCollection = collection(
      db,
      "Proyectos",
      projectId,
      "Partidas"
    );

    const querySnapshot = await getDocs(projectPartidasCollection);
    const partidas = querySnapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id,
        Id: data.Id,
        Cantidad: data.Cantidad,
        CostoEnvio: data.CostoEnvio,
        CostoImporte: data.CostoImporte,
        CostoImporteUSD: data.CostoImporteUSD,
        FechaTermino: data.FechaTermino,
        NumeroDeParte: data.NumeroDeParte,
        PUCostoMX: data.PUCostoMX,
        PUCostoUSD: data.PUCostoUSD,
        PUMX: data.PUMX,
        PUUSD: data.PUUSD,
        PrecioSinPromocion: data.PrecioSinPromocion,
        Promocion: data.Promocion,
        Proveedor: data.Proveedor,
        SubTotalMN: data.SubTotalMN,
        SubTotalUSD: data.SubTotalUSD,
        TiempoEntrega: data.TiempoEntrega,
        Unidad: data.Unidad,
        Descripcion: data.Descripcion,
        Comentarios: data.Comentarios,
      };
    });

    setPartidasData(partidas);
  }

  async function saveAllRowsToFirestore(rows: any, projectId: string) {
    const db = getFirestore();
    const projectPartidasCollection = collection(
      db,
      "Proyectos",
      projectId,
      "Partidas"
    );

    console.log("Rows:");
    console.log(rows);

    for (const row of rows) {
      const { id, isNew, ...rowData } = row;

      console.log("Current row:");
      console.log(row);
      console.log("Row data:");
      console.log(rowData);

      if (isNew) {
        await addDoc(projectPartidasCollection, rowData);
      } else {
        const docRef = doc(db, "Proyectos", projectId, "Partidas", id);
        console.log("rowData");
        console.log(rowData);
        await updateDoc(docRef, rowData);
      }
    }

    // Refresh data after saving
    refreshData();
  }

  async function refreshData() {
    await fetchData();
  }

  const handleClick = () => {
    const id = uuidv4();
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        Partida: "",
        Descripcion: "",
        Unidad: "",
        Cantidad: "",
        PUCostoMX: "",
        PUCostoUSD: "",
        CostoImporte: "",
        CostoImporteUSD: "",
        CodigoProveedor: "",
        Utilidad: "",
        ManoDeObra: "",
        Indirect: "",
        Maqui: "",
        Finan: "",
        PUMX: "",
        SubTotalMN: "",
        PUUSD: "",
        SubTotalUSD: "",
        isNew: true,
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "Partida" },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
      <Button
        color="primary"
        startIcon={<SaveIcon />}
        onClick={(event) => saveAllRowsToFirestore(partidasData, projectId)}
      >
        Save
      </Button>
    </GridToolbarContainer>
  );
}

interface FullFeaturedCrudGridProps {
  projectId: string;
}

export default function FullFeaturedCrudGrid({
  projectId,
}: FullFeaturedCrudGridProps) {
  // ...

  const [projects, setProjects] = React.useState<Proyecto[]>([]);
  const [partidas, setPartidas] = React.useState<Partidas[]>([]);
  const [rows, setRows] = React.useState<ExtendedPartidas[]>([]);

  const [partidasData, setPartidasData] = React.useState<Partidas[]>([]);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const db = getFirestore();
    const projectPartidasCollection = collection(
      db,
      "Proyectos",
      projectId,
      "Partidas"
    );

    const querySnapshot = await getDocs(projectPartidasCollection);
    const partidas = querySnapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id,
        Id: data.Id,
        Cantidad: data.Cantidad,
        CostoEnvio: data.CostoEnvio,
        CostoImporte: data.CostoImporte,
        CostoImporteUSD: data.CostoImporteUSD,
        FechaTermino: data.FechaTermino,
        NumeroDeParte: data.NumeroDeParte,
        PUCostoMX: data.PUCostoMX,
        PUCostoUSD: data.PUCostoUSD,
        PUMX: data.PUMX,
        PUUSD: data.PUUSD,
        PrecioSinPromocion: data.PrecioSinPromocion,
        Promocion: data.Promocion,
        Proveedor: data.Proveedor,
        SubTotalMN: data.SubTotalMN,
        SubTotalUSD: data.SubTotalUSD,
        TiempoEntrega: data.TiempoEntrega,
        Unidad: data.Unidad,
        Descripcion: data.Descripcion,
        Comentarios: data.Comentarios,
      };
    });

    setPartidasData(partidas);
  }

  useEffect(() => {
    async function fetchData() {
      const db = getFirestore(firebaseConfig.firebase);
      const projectRef = doc(db, "Proyectos", projectId);
      const partidasCollection = collection(projectRef, "Partidas");
      const partidasSnapshot = await getDocs(partidasCollection);

      const partidasData: Partidas[] = partidasSnapshot.docs.map(
        (partidaDoc) => {
          const data = partidaDoc.data();
          const partidaId = partidaDoc.id;

          return {
            id: partidaId,
            Id: partidaId,
            Cantidad: data.Cantidad,
            CostoEnvio: data.CostoEnvio,
            CostoImporte: data.CostoImporte,
            CostoImporteUSD: data.CostoImporteUSD,
            FechaTermino: data.FechaTermino,
            NumeroDeParte: data.NumeroDeParte,
            PUCostoMX: data.PUCostoMX,
            PUCostoUSD: data.PUCostoUSD,
            PUMX: data.PUMX,
            PUUSD: data.PUUSD,
            PrecioSinPromocion: data.PrecioSinPromocion,
            Promocion: data.Promocion,
            Proveedor: data.Proveedor,
            SubTotalMN: data.SubTotalMN,
            SubTotalUSD: data.SubTotalUSD,
            TiempoEntrega: data.TiempoEntrega,
            Unidad: data.Unidad,
            Descripcion: data.Descripcion,
            Comentarios: data.Comentarios,
          };
        }
      );

      setPartidas(partidasData);
      setRows(partidasData.map((partida) => ({ ...partida, isNew: false })));
    }

    if (projectId) {
      fetchData();
    }
  }, [projectId]);

  const handleRowEditStart = (
    params: GridRowParams,
    event: MuiEvent<React.SyntheticEvent>
  ) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.Id === id);
    if (editedRow && editedRow.isNew) {
      setRows(rows.filter((row) => row.Id !== id));
    }
  };

  const processRowUpdate = (
    newRow: ExtendedPartidas,
    oldRow: ExtendedPartidas
  ) => {
    const updatedRow: ExtendedPartidas = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.Id === newRow.Id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (
    newModel: React.SetStateAction<GridRowModesModel>
  ) => {
    setRowModesModel(newModel);
  };

  console.log(projects);
  console.log(partidas);

  const columns: GridColDef[] = [
    { field: "Partida", headerName: "Partida", width: 120, editable: true },
    {
      field: "Descripcion",
      headerName: "Descripción del concepto",
      width: 220,
      editable: true,
    },
    { field: "Unidad", headerName: "Unidad", width: 100, editable: true },
    {
      field: "Cantidad",
      headerName: "Cantidad",
      type: "number",
      width: 120,
      editable: true,
    },
    {
      field: "PUCostoMX",
      headerName: "P.U. Costo MX$",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "PUCostoUSD",
      headerName: "P.U. Costo USD",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "CostoImporte",
      headerName: "Costo Importe",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "CostoImporteUSD",
      headerName: "Costo Importe USD",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "NumeroDeParte",
      headerName: "Número de parte",
      width: 150,
      editable: true,
    },
    { field: "Proveedor", headerName: "Proveedor", width: 150, editable: true },
    {
      field: "Promocion",
      headerName: "Promocion",
      width: 120,
      type: "boolean",
      editable: true,
    },
    {
      field: "FechaTermino",
      headerName: "Fecha de Termino",
      type: "date",
      width: 200,
      valueGetter: (params) => {
        if (params.row.FechaTermino) {
          return new Date(params.row.FechaTermino.seconds * 1000);
        }
        return null;
      },
    },
    {
      field: "PrecioSinPromocion",
      headerName: "Precio sin promocion",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "CostoEnvio",
      headerName: "Nota de costo de envío",
      width: 220,
      editable: true,
    },
    {
      field: "TiempoEntrega",
      headerName: "Tiempo de entrega",
      width: 150,
      editable: true,
    },
    {
      field: "PUMX",
      headerName: "P.U. MX$",
      type: "number",
      width: 120,
      editable: true,
    },
    {
      field: "SubTotalMN",
      headerName: "Sub Total MN",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "PUUSD",
      headerName: "P.U. USD",
      type: "number",
      width: 120,
      editable: true,
    },
    {
      field: "SubTotalUSD",
      headerName: "Sub Total USD",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      {rows && (
        <DataGridPro
          rows={partidasData}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStart={handleRowEditStart}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          slots={{
            toolbar: EditToolbar,
          }}
          slotProps={{
            toolbar: {
              setRows,
              setRowModesModel,
              projectId,
              partidas,
              setPartidasData,
              partidasData
            },
          }}
        />
      )}
    </Box>
  );
}
