public class SummaryDTO {
    public double income;
    public double expense;
    public double balance;

    public SummaryDTO(double income, double expense) {
        this.income = income;
        this.expense = expense;
        this.balance = income - expense;
    }
}

