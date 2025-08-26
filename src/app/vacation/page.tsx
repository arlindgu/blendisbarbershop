export default function VacationPage() {

    const vacationInfo = {
        returnDate: "15. Januar",
        cause: "Betriebsurlaub"
    }
    
    return (
      <div className="justify-center items-center flex flex-col h-screen">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4 max-w-5xl">
            {vacationInfo.cause}
          </h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4 max-w-5xl">
            Der Barbershop ist vorübergehend geschlossen.
          </h2>
          <p className="text-muted-foreground">
            Wir sind am {vacationInfo.returnDate} wieder für Sie da.
          </p>
          <p className="text-muted-foreground">
            Termine sind nur ab dem {vacationInfo.returnDate} buchbar.
          </p>
        </div>
      </div>
    );
}