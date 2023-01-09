function compareTime(TimeString1, TimeString2)
{
    let DateTime1= new Date(TimeString1);
    let DateTime2= new Date(TimeString2);
    return (DateTime1.getTime() > DateTime2.getTime());
}
module.exports={ compareTime}