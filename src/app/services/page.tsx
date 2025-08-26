"use client"
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Scissors, MapPin, User, Calendar } from "lucide-react";
import CalEmbed from "@/components/ui/bookingcal";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background mt-32">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Unsere Services und Preise
          </h1>
          <p className="text-xl text-muted-foreground">
            Professionelle Barber-Dienstleistungen mit transparenten Preisen.
            Qualitätsschnitte und -stylings für jeden Anlass.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scissors className="h-5 w-5" />
                Hair Styling
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Erwachsenen Haarschnitt
                    </TableCell>
                    <TableCell className="text-right font-bold text-foreground">
                      CHF 30
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Kinder Haarschnitt
                    </TableCell>
                    <TableCell className="text-right font-bold text-foreground">
                      CHF 20
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Bart Styling
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Bart Styling</TableCell>
                    <TableCell className="text-right font-bold text-foreground">
                      CHF 10
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Bart Färben</TableCell>
                    <TableCell className="text-right font-bold text-foreground">
                      CHF 15
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Anderes Styling
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Wachsmaske</TableCell>
                    <TableCell className="text-right font-bold text-foreground">
                      CHF 15
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Augenbrauen</TableCell>
                    <TableCell className="text-right font-bold text-foreground">
                      CHF 10
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>
                Bereit für einen Termin?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CalEmbed />
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
