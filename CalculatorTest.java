import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class CalculatorTest {
    
 
    Calculator c = new Calculator();

    @Test
    void testAddition() {
        assertEquals(30, 10 + 20, "Addition should be 30");
    }

    @Test
    void testSubtraction() {
        assertEquals(5, 10 - 5, "Subtraction should be 5");
    }

    @Test
    void testMultiplication() {
        assertEquals(30, 10 * 3, "Multiplication should be 30");
    }
}
