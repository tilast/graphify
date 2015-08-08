package org.dodiks;


import org.dodiks.json.JsonSample;
import org.dodiks.json.JsonTransformer;

import static spark.Spark.get;

/**
 * Created by Sutula on 08.08.15
 */
public class Main {
    public static void main(String[] args) {
        get("/hello", (req, res) -> "Hello World");

        get("/jsonsample", "application/json", (request, response) -> {
            return new JsonSample(1, "Hello dodiks!");
        }, new JsonTransformer());
    }
}
