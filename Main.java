import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int x1 = s.nextInt();
        int y1 = s.nextInt();
        int x2 = s.nextInt();
        int y2 = s.nextInt();
        if (x1 == x2 || y1 == y2 || Math.abs((x1 - x2) == (y1 - y2))) {
            System.out.print("Yes");
        } else
            System.out.print("No");
    }
}
