package com.example.definethebody.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "trainers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Trainer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;
	private String fullImage;
	private String thumbnailImage;
	private String instagramUrl;
}
