package org.dodiks.json;

import com.google.gson.Gson;
import spark.ResponseTransformer;

/**
 * Created by mrgibbs on 08.08.15.
 */

public class JsonTransformer implements ResponseTransformer {

    private Gson gson = new Gson();

    @Override
    public String render(Object model) {
        return gson.toJson(model);
    }

}
