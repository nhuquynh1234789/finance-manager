import java.util.*;

public class TransactionController {
    private TransactionService service = new TransactionServiceImpl();

    public Transaction addTransaction(Transaction t) {
        return service.save(t);
    }

    public SummaryDTO summary() {
        return service.getSummary();
    }
}
