package com.elibrary.backend.Scholar;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

class ScholarControllerTests {

    @Test
    void parseKeysTrimsCommaSeparatedFallbackKeys() {
        assertThat(ScholarController.parseKeys(" first , , second "))
                .containsExactly("first", "second");
    }
}
