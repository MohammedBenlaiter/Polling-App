package com.voting.votingapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.voting.votingapp.models.Poll;

@Repository
public interface PollRepository extends JpaRepository<Poll, Long> {

}