# time.Sleep
Para dar um tempo, ela faz com que o programa espere tanto tempo, para que algo aconteça.
```go
import "time"
```
Faça isso para usar o pacote.
```go
time.Sleep(10 * time.Minute)
```
Essa constante minute, converte para o tempo, a qual esta o time.Sleep. Também temos a constante time.Second, que converte para segundos: `time.Second`, ou para milésimos, e assim vai. 
# Simplificação no import
Ao invés de criar vários imports em sequência, você pode criar da seguinte forma:
```go
import (
    "fmt"
    "os"
    "net/http"
    "time"
)
```
Colocando vários pacotes em sequência dentro de imports. 
# .Now()
Você pode obter o .Now, para pegar o horário atual. E então você pode usar várias funções a partir do retorno dessa, como .Hour(), .Day(), .Month(), .Second(), .Minute() e assim vai. E você tem o .Fomat, que então você pode usar várias constantes, que indicam coisas diferentes, 
```go
const (
   133  	_                        = iota
   134  	stdLongMonth             = iota + stdNeedDate  // "January"
   135  	stdMonth                                       // "Jan"
   136  	stdNumMonth                                    // "1"
   137  	stdZeroMonth                                   // "01"
   138  	stdLongWeekDay                                 // "Monday"
   139  	stdWeekDay                                     // "Mon"
   140  	stdDay                                         // "2"
   141  	stdUnderDay                                    // "_2"
   142  	stdZeroDay                                     // "02"
   143  	stdUnderYearDay          = iota + stdNeedYday  // "__2"
   144  	stdZeroYearDay                                 // "002"
   145  	stdHour                  = iota + stdNeedClock // "15"
   146  	stdHour12                                      // "3"
   147  	stdZeroHour12                                  // "03"
   148  	stdMinute                                      // "4"
   149  	stdZeroMinute                                  // "04"
   150  	stdSecond                                      // "5"
   151  	stdZeroSecond                                  // "05"
   152  	stdLongYear              = iota + stdNeedDate  // "2006"
   153  	stdYear                                        // "06"
   154  	stdPM                    = iota + stdNeedClock // "PM"
   155  	stdpm                                          // "pm"
   156  	stdTZ                    = iota                // "MST"
   157  	stdISO8601TZ                                   // "Z0700"  // prints Z for UTC
   158  	stdISO8601SecondsTZ                            // "Z070000"
   159  	stdISO8601ShortTZ                              // "Z07"
   160  	stdISO8601ColonTZ                              // "Z07:00" // prints Z for UTC
   161  	stdISO8601ColonSecondsTZ                       // "Z07:00:00"
   162  	stdNumTZ                                       // "-0700"  // always numeric
   163  	stdNumSecondsTz                                // "-070000"
   164  	stdNumShortTZ                                  // "-07"    // always numeric
   165  	stdNumColonTZ                                  // "-07:00" // always numeric
   166  	stdNumColonSecondsTZ                           // "-07:00:00"
   167  	stdFracSecond0                                 // ".0", ".00", ... , trailing zeros included
   168  	stdFracSecond9                                 // ".9", ".99", ..., trailing zeros omitted
   169  
   170  	stdNeedDate       = 1 << 8             // need month, day, year
   171  	stdNeedYday       = 1 << 9             // need yday
   172  	stdNeedClock      = 1 << 10            // need hour, minute, second
   173  	stdArgShift       = 16                 // extra argument in high bits, above low stdArgShift
   174  	stdSeparatorShift = 28                 // extra argument in high 4 bits for fractional second separators
   175  	stdMask           = 1<<stdArgShift - 1 // mask out argument
   176  )
   177
```
Pereba aqui que tem várias contantes que indicam diferentes formatações. 
Veja mais https://go.dev/src/time/format.go.

|O que queremos editar|código|
|---|---|
|dia (com zero)|02|
|dia (sem o zero)|2|
|dia da semana (inteiro)|Monday|
|dia da semana abreviado|Mon|
|mês com número (com zero)|01|
|mês com número (sem zero)|1|
|mês (nome inteiro)|January|
|mês (nome abreviado)|Jan|
|ano (inteiro)|2006|
|ano (abreviado)|06|
|hora (com zero)|03|
|hora (sem zero)|3|
|hora (formato 24 horas)|15|
|minutos (com zero)|04|
|minutos (sem zero)|4|
|segundos (com zero)|05|
|segundos (sem zero)|5|
# Now()
Retorna o tempo atual. 
```go
func main() { data := time.Now() fmt.Println(data) } // 2019-05-03 10:29:46.986583 -0300 -03 m=+0.000178751
```
