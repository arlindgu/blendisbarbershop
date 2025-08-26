import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ServicesAndPricingPage() {



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 mt-32 mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Hair Styling</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Erwachsenen Haarschnitt
                    </TableCell>
                    <TableCell className="text-right">CHF 30</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Kinder Haarschnitt
                    </TableCell>
                    <TableCell className="text-right">CHF 20</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Bart Styling</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Bart Styling</TableCell>
                    <TableCell className="text-right">CHF 10</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Bart Färben</TableCell>
                    <TableCell className="text-right">CHF 15</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Anderes Styling</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Wachsmaske</TableCell>
                    <TableCell className="text-right">CHF 15</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Augenbrauen</TableCell>
                    <TableCell className="text-right">CHF 10</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          </div>
    );
}