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
  PrecioSinPromoción: number;
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



interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
  partidas: any;
  projectId: string;
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel, projectId, partidas } = props;

  async function saveAllRowsToFirestore(rows: any, projectId: string) {
    const db = getFirestore();
    const projectPartidasCollection = collection(
      db,
      "Proyectos",
      projectId,
      "Partidas"
    );

    for (const row of rows) {
      const { id, isNew, ...rowData } = row;
      if (isNew) {
        await addDoc(projectPartidasCollection, rowData);
      } else {
        const docRef = doc(db, "Proyectos", projectId, "Partidas", id);
        await updateDoc(docRef, rowData);
      }
    }

    // Refresh data after saving
    refreshData();
  }

  async function refreshData() {
    // Add your data refresh logic here if needed
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
        onClick={(event) => saveAllRowsToFirestore(partidas, projectId)}
      >
        Save
      </Button>
    </GridToolbarContainer>
  );
}

export default function FullFeaturedCrudGrid() {
  const [projects, setProjects] = React.useState<Proyecto[]>([]);
  const [partidas, setPartidas] = React.useState<Partidas[]>([]);
  const [rows, setRows] = React.useState<ExtendedGridRowModel[]>([]);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );
  const [projectId, setProjectId] = React.useState("");

  useEffect(() => {
    async function fetchData() {
      const db = getFirestore(firebaseConfig.firebase);
      const querySnapshot = await getDocs(collection(db, "Proyectos"));

      const proyectosData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const projectId = doc.id;

        const partidasRef = collection(doc.ref, "Partidas");

        return {
          Id: projectId,
          Celular: data.Celular,
          DiasCredito: data.DiasCredito,
          Direccion: data.Direccion,
          DireccionEntrega: data.DireccionEntrega,
          Email: data.Email,
          FechaCreacion: data.FechaCreacion,
          Nombre: data.Nombre,
          NombreContacto: data.NombreContacto,
          RFC: data.RFC,
          Partidas: partidasRef,
        };
      });

      setProjects(proyectosData);
      if (proyectosData.length > 0) {
        setProjectId(proyectosData[0].Id); // Set the first project id as the current one
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const db = getFirestore(firebaseConfig.firebase);
      const proyectosCollection = collection(db, "Proyectos");
      const querySnapshot = await getDocs(proyectosCollection);
  
      const partidasData: Partidas[] = [];
  
      for (const doc of querySnapshot.docs) {
        const proyectoRef = doc.ref;
        const partidasCollection = collection(proyectoRef, "Partidas");
        const partidasSnapshot = await getDocs(partidasCollection);
  
        partidasSnapshot.forEach((partidaDoc) => {
          const data = partidaDoc.data();
          const partidaId = partidaDoc.id;
  
          partidasData.push({
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
            PrecioSinPromoción: data.PrecioSinPromoción,
            Promocion: data.Promocion,
            Proveedor: data.Proveedor,
            SubTotalMN: data.SubTotalMN,
            SubTotalUSD: data.SubTotalUSD,
            TiempoEntrega: data.TiempoEntrega,
            Unidad: data.Unidad,
            Descripcion: data.Descripcion,
            Comentarios: data.Comentarios,
          });
        });
      }
  
      setPartidas(partidasData);
    }
  
    fetchData();
  }, []);
  

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

  const processRowUpdate = (newRow: ExtendedGridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.Id === newRow.Id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
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
      headerName: "Promoción",
      width: 120,
      type: "boolean",
      editable: true,
    },
    {
      field: "FechaTermino",
      headerName: "Fecha de término",
      width: 150,
      type: "date",
      editable: true,
    },
    {
      field: "PrecioSinPromocion",
      headerName: "Precio sin promoción",
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
      field: "Utilidad",
      headerName: "Utilidad",
      type: "number",
      width: 120,
      editable: true,
    },
    {
      field: "ManoDeObra",
      headerName: "Mano de Obra",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "Indirect",
      headerName: "Indirect",
      type: "number",
      width: 120,
      editable: true,
    },
    {
      field: "Maqui",
      headerName: "Maqui",
      type: "number",
      width: 100,
      editable: true,
    },
    {
      field: "Finan",
      headerName: "Finan",
      type: "number",
      width: 100,
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
          rows={rows}
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
              setProjectId,
            },
          }}
        />
      )}
    </Box>
  );
}
