package itstep.thesis.telegram.beans;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@JsonInclude(JsonInclude.Include.NON_NULL)//указывает, что свойство сериализуется, если его значение не равно null.
@JsonIgnoreProperties(ignoreUnknown = true)//указать, что любое неизвестное свойство в строке JSON, т. е. любое свойство, для которого у нас нет соответствующего поля, будет игнорироваться.


@Data
public class ResultDTO<T> {

    private T result;
	private String message;
	private boolean isSuccess;
	
     
	public ResultDTO() {
		super();
	}
    public ResultDTO(T data, String message, boolean isSuccess) {
		super();
		this.result = data;
		this.message = message;
		this.isSuccess = isSuccess;
		
	}

	public ResultDTO(String message, boolean isSuccess) {
		super();
		this.message = message;
		this.isSuccess = isSuccess;
	}
    
}
