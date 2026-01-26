@Entity
public class Transaction {

    @Id
    @GeneratedValue
    private Long id;

    private String type;      // INCOME / EXPENSE
    private double amount;
    private String category;
    private String description;
    private LocalDate date;

    // getters & setters
}
