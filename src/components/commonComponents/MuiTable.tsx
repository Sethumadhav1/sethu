import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  SxProps,
  Theme,
} from "@mui/material";
import React, { useEffect } from "react";

export default function MuiTableComponent({
  table,
  maxHeight,
  minHeight,
  headerStyle,
}: {
  table: {
    Headers: {
      id: any;
      colSpan: any;
      muiSxs: SxProps<Theme>;
      content: string | JSX.Element;
      CommonMenuProps?: Object;
      Modifier?: (a: any) => string | JSX.Element;
      ColumnModifier?: (a: any) => string | JSX.Element;
    }[];
    rows: {
      id: string;
      muiSxs: SxProps<Theme>;
      commonCellMuiSxs?: SxProps<Theme>;
      values: {
        [key: string]: {
          content: string | JSX.Element;
          muiSxs: SxProps<Theme>;
          Modifier?: (a: any) => string | JSX.Element;
        };
      };
    }[];
    visibleColumns: string[];
    CommonMenu?: (arg: any) => JSX.Element;
  };
  maxHeight?: string;
  minHeight?: string;
  headerStyle?: SxProps<Theme>;
}) {
  const CommonMenu = table.CommonMenu;
  return (
    <>
      <TableContainer
        sx={{
          maxHeight: maxHeight ? maxHeight : "auto",
          minHeight: minHeight ? minHeight : "auto",
        }}
      >
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow
              sx={{
                verticalAlign: "baseline",
                ...headerStyle,
                position: "sticky",
                zIndex: "4",
              }}
            >
              {table.visibleColumns.map((h) => {
                const head = table.Headers.find((head) => head.id === h);
                return (
                  <TableCell
                    id={h}
                    key={h}
                    colSpan={head?.colSpan}
                    sx={{
                      ...head?.muiSxs,
                      position: "sticky",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: "1px" }}>
                      {head?.Modifier
                        ? head.Modifier(head?.content)
                        : head?.content}
                      {CommonMenu && (
                        <CommonMenu
                          key={head?.id}
                          {...(head?.CommonMenuProps || {})}
                        />
                      )}
                    </Box>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {table.rows.map((row) => {
              return (
                <TableRow key={row.id} sx={{ ...row.muiSxs }}>
                  {table.visibleColumns.map((cell) => {
                    const head = table.Headers.find((head) => head.id === cell);
                    // console.log(head?.id,row.values[cell]?.Modifier?.(row.values[cell]?.content),row.values[cell])
                    const styles = {
                      ...(row.commonCellMuiSxs || {}),
                      ...row.values[cell]?.muiSxs,
                    };
                    return (
                      <TableCell
                        colSpan={head?.colSpan}
                        key={cell}
                        sx={{
                          ...styles,
                        }}
                      >
                        {" "}
                        {head?.ColumnModifier
                          ? head?.ColumnModifier(row.values[cell]?.content)
                          : row.values[cell]?.Modifier?.(
                              row.values[cell]?.content
                            ) ?? row.values[cell]?.content}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}