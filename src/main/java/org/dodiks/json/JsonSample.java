package org.dodiks.json;

/**
 * Created by mrgibbs on 08.08.15.
 */
public class JsonSample {
    private int id;
    private String message;

    public JsonSample(int id, String message) {
        this.id = id;
        this.message = message;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
