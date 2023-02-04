package itstep.thesis.telegram.models.MessageModel;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "dataMessage")
public class DataMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

   
    @Column(name = "data")
    private String data;

    @ManyToOne(cascade = CascadeType.ALL)    
    @JoinColumn(name = "message_id")
    private Message message;
}
