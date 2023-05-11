import {
  Button as MuiButton,
  Paper,
  Table,
  TableBody,
  TableRow,
  Grid,
  TableCell,
  TableContainer,
  TableHead,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

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
  isNew?: boolean;
}

interface DataTableProps {
  data: Entry[];
}

const TableCRUD: React.FC<DataTableProps> = ({ data }) => {
  const [tableData, setTableData] = useState<Entry[]>(data);
  const [selectedEntry, setSelectedEntry] = useState<Entry | null>(null);
  const [formState, setFormState] = useState<Entry>({
    Id: "",
    Descripcion: "",
    Unidad: "",
    Cantidad: 0,
    PUCostoMX: 0,
    PUCostoUSD: 0,
    CostoImporte: 0,
    CostoEnvio: "",
    NumeroDeParte: "",
    CostoImporteUSD: 0,
    FechaTermino: "",
    Comentarios: "",
    PrecioSinPromocion: 0,
    TiempoEntrega: "",
    Promocion: false,
    Proveedor: "",
    PUMX: 0,
    SubTotalMN: 0,
    PUUSD: 0,
    SubTotalUSD: 0,
    isNew: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const addEntry = () => {
    setTableData([...tableData, { ...formState, Id: Date.now().toString() }]);
  };

  const updateEntry = () => {
    if (selectedEntry) {
      setTableData(
        tableData.map((entry) =>
          entry.Id === selectedEntry.Id ? formState : entry
        )
      );
      setSelectedEntry(null);
    }
  };

  const deleteEntry = (id: string) => {
    setTableData(tableData.filter((entry) => entry.Id !== id));
  };

  const selectEntry = (entry: Entry) => {
    setSelectedEntry(entry);
    setFormState(entry);
  };

  const clearForm = () => {
    setFormState({
      Id: "",
      Descripcion: "",
      Unidad: "",
      Cantidad: 0,
      PUCostoMX: 0,
      PUCostoUSD: 0,
      CostoImporte: 0,
      CostoEnvio: "",
      NumeroDeParte: "",
      CostoImporteUSD: 0,
      FechaTermino: "",
      Comentarios: "",
      PrecioSinPromocion: 0,
      TiempoEntrega: "",
      Promocion: false,
      Proveedor: "",
      PUMX: 0,
      SubTotalMN: 0,
      PUUSD: 0,
      SubTotalUSD: 0,
      isNew: true,
    });
    setSelectedEntry(null);
  };

  return (
    <div>
      <TableContainer component={Paper} sx={{ borderRadius: 2, mt: 4, p: 2 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Descripcion</TableCell>
              <TableCell>Unidad</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>PUCostoMX</TableCell>
              <TableCell>PUCostoUSD</TableCell>
              <TableCell>CostoImporte</TableCell>
              <TableCell>CostoEnvio</TableCell>
              <TableCell>NumeroDeParte</TableCell>
              <TableCell>CostoImporteUSD</TableCell>
              <TableCell>FechaTermino</TableCell>
              <TableCell>Comentarios</TableCell>
              <TableCell>PrecioSinPromocion</TableCell>
              <TableCell>TiempoEntrega</TableCell>
              <TableCell>Promocion</TableCell>
              <TableCell>Proveedor</TableCell>
              <TableCell>PUMX</TableCell>
              <TableCell>SubTotalMN</TableCell>
              <TableCell>PUUSD</TableCell>
              <TableCell>SubTotalUSD</TableCell>

              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((entry) => (
              <TableRow key={entry.Id}>
                <TableCell>{entry.Descripcion}</TableCell>
                <TableCell>{entry.Unidad}</TableCell>
                <TableCell>{entry.Cantidad}</TableCell>
                <TableCell>{entry.PUCostoMX}</TableCell>
                <TableCell>{entry.PUCostoUSD}</TableCell>
                <TableCell>{entry.CostoImporte}</TableCell>
                <TableCell>{entry.CostoEnvio}</TableCell>
                <TableCell>{entry.NumeroDeParte}</TableCell>
                <TableCell>{entry.CostoImporteUSD}</TableCell>
                <TableCell>{entry.FechaTermino}</TableCell>
                <TableCell>{entry.Comentarios}</TableCell>
                <TableCell>{entry.PrecioSinPromocion}</TableCell>
                <TableCell>{entry.TiempoEntrega}</TableCell>
                <TableCell>{entry.Promocion ? "Sí" : "No"}</TableCell>
                <TableCell>{entry.Proveedor}</TableCell>
                <TableCell>{entry.PUMX}</TableCell>
                <TableCell>{entry.SubTotalMN}</TableCell>
                <TableCell>{entry.PUUSD}</TableCell>
                <TableCell>{entry.SubTotalUSD}</TableCell>

                <TableCell>
                  <MuiButton
                    onClick={() => selectEntry(entry)}
                    variant="contained"
                    color="secondary"
                    sx={{ mr: 1, mb: 1 }}
                  >
                    Edit
                  </MuiButton>
                  <MuiButton
                    onClick={() => deleteEntry(entry.Id)}
                    variant="contained"
                    color="secondary"
                    sx={{ mb: 1 }}
                  >
                    Delete
                  </MuiButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="text"
            name="Descripcion"
            label="Descripcion"
            value={formState.Descripcion}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="text"
            name="Unidad"
            label="Unidad"
            value={formState.Unidad}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="number"
            name="Cantidad"
            label="Cantidad"
            value={formState.Cantidad}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="number"
            name="PUCostoMX"
            label="PUCostoMX"
            value={formState.PUCostoMX}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="number"
            name="PUCostoUSD"
            label="PUCostoUSD"
            value={formState.PUCostoUSD}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="number"
            name="CostoImporte"
            label="CostoImporte"
            value={formState.CostoImporte}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="string"
            name="CostoEnvio"
            label="CostoEnvio"
            value={formState.CostoEnvio}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="text"
            name="NumeroDeParte"
            label="Número de Parte"
            value={formState.NumeroDeParte}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="number"
            name="CostoImporteUSD"
            label="CostoImporteUSD"
            value={formState.CostoImporteUSD}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="text"
            name="FechaTermino"
            label="Fecha Término"
            value={formState.FechaTermino}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="number"
            name="PrecioSinPromocion"
            label="Precio Sin Promoción"
            value={formState.PrecioSinPromocion}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="text"
            name="TiempoEntrega"
            label="Tiempo Entrega"
            value={formState.TiempoEntrega}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="boolean"
            name="Promocion"
            label="Promocion"
            value={formState.Promocion}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="text"
            name="Proveedor"
            label="Proveedor"
            value={formState.Proveedor}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="number"
            name="PUMX"
            label="PUMX"
            value={formState.PUMX}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="text"
            name="Comentarios"
            label="Comentarios"
            value={formState.Comentarios}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            type="number"
            name="SubTotalMN"
            label="SubTotalMN"
            value={formState.SubTotalMN}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="number"
            name="PUUSD"
            label="PUUSD"
            value={formState.PUUSD}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="number"
            name="SubTotalUSD"
            label="SubTotalUSD"
            value={formState.SubTotalUSD}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          {selectedEntry ? (
            <MuiButton
              onClick={updateEntry}
              variant="contained"
              color="secondary"
              sx={{ ml: 1, mb: 1 }}
            >
              Update
            </MuiButton>
          ) : (
            <MuiButton
              onClick={addEntry}
              variant="contained"
              color="secondary"
              sx={{ ml: 1, mb: 1 }}
            >
              Add
            </MuiButton>
          )}
          <MuiButton
            onClick={clearForm}
            variant="contained"
            color="secondary"
            sx={{ ml: 1, mb: 1 }}
          >
            Clear
          </MuiButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default TableCRUD;
