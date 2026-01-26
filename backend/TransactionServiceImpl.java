import java.util.*;

public class TransactionServiceImpl implements TransactionService {
    private List<Transaction> repo = new ArrayList<>();

    @Override
    public Transaction save(Transaction t) {
        if (t.getAmount() <= 0) throw new RuntimeException("Invalid amount");
        repo.add(t);
        return t;
    }

    @Override
    public SummaryDTO getSummary() {
        double income = 0, expense = 0;
        for (Transaction t : repo) {
            if ("INCOME".equals(t.getType())) income += t.getAmount();
            else expense += t.getAmount();
        }
        return new SummaryDTO(income, expense);
    }
}

